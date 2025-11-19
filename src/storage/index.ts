import { isChromeExtension } from "../env";
import * as chromeImpl from "./chrome";

export function setDid(did: string): Promise<void> {
  if (isChromeExtension()) return chromeImpl.setDid(did);

  throw new Error(
    "No compatible storage provider available in this environment. " +
      "Currently only Chrome extensions are supported."
  );
}

export function getDid(): Promise<string | null> {
  if (isChromeExtension()) return chromeImpl.getDid();

  throw new Error(
    "No compatible storage provider available in this environment. " +
      "Currently only Chrome extensions are supported."
  );
}

export function clearDid(): Promise<void> {
  if (isChromeExtension()) return chromeImpl.clearDid();

  throw new Error(
    "No compatible storage provider available in this environment. " +
      "Currently only Chrome extensions are supported."
  );
}
export function setControllerKey(controllerPriv: string) {
  if (isChromeExtension()) return chromeImpl.setControllerKey(controllerPriv);

  throw new Error(
    "No compatible storage provider available in this environment. " +
      "Currently only Chrome extensions are supported."
  );
}

export function setRecoveryKey(recoveryPriv: string) {
  if (isChromeExtension()) return chromeImpl.setRecoveryKey(recoveryPriv);

  throw new Error(
    "No compatible storage provider available in this environment. " +
      "Currently only Chrome extensions are supported."
  );
}
