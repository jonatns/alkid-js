import { isChromeExtension } from "../env";
import * as chromeImpl from "./chrome";
export function start(options) {
    if (isChromeExtension())
        return chromeImpl.start(options);
    throw new Error("No compatible recovery method found for this environment. " +
        "Currently only Chrome extensions are supported.");
}
//# sourceMappingURL=index.js.map