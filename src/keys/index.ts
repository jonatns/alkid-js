import { isChromeExtension } from "../env";
import * as chromeImpl from "./chrome";

export function generateKeys() {
  if (isChromeExtension()) return chromeImpl.generate();

  throw new Error(
    "No compatible key provider found for this environment. " +
      "Currently only Chrome extensions are supported."
  );
}
