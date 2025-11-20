import { isChromeExtension } from "../env";
import * as chromeImpl from "./chrome";
export function setDid(did) {
    if (isChromeExtension())
        return chromeImpl.setDid(did);
    throw new Error("No compatible storage provider available in this environment. " +
        "Currently only Chrome extensions are supported.");
}
export function getDid() {
    if (isChromeExtension())
        return chromeImpl.getDid();
    throw new Error("No compatible storage provider available in this environment. " +
        "Currently only Chrome extensions are supported.");
}
export function clearDid() {
    if (isChromeExtension())
        return chromeImpl.clearDid();
    throw new Error("No compatible storage provider available in this environment. " +
        "Currently only Chrome extensions are supported.");
}
export function setControllerKey(controllerPriv) {
    if (isChromeExtension())
        return chromeImpl.setControllerKey(controllerPriv);
    throw new Error("No compatible storage provider available in this environment. " +
        "Currently only Chrome extensions are supported.");
}
export function setRecoveryKey(recoveryPriv) {
    if (isChromeExtension())
        return chromeImpl.setRecoveryKey(recoveryPriv);
    throw new Error("No compatible storage provider available in this environment. " +
        "Currently only Chrome extensions are supported.");
}
//# sourceMappingURL=index.js.map