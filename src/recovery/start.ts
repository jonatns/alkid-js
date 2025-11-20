import { isChromeExtension } from "../env";
import * as chromeImpl from "./chrome";

export interface StartOptions {
  controller: string;
  recovery: string;
  network: "mainnet" | "regtest";
  baseUrl?: string;
  redirectUri?: string;
}

export function start(options: StartOptions): Promise<string> {
  if (isChromeExtension()) return chromeImpl.start(options);

  throw new Error(
    "No compatible recovery method found for this environment. " +
      "Currently only Chrome extensions are supported."
  );
}
