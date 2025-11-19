import { ALKID_NAMESPACE } from "../constants";

const DID_KEY = `${ALKID_NAMESPACE}_did`;
const CONTROLLER_KEY = `${ALKID_NAMESPACE}_controller`;
const RECOVERY_KEY = `${ALKID_NAMESPACE}_recovery`;

export async function setDid(did: string): Promise<void> {
  await chrome.storage.local.set({ [DID_KEY]: did });
}

export async function getDid(): Promise<string | null> {
  const { alkid_did } = await chrome.storage.local.get<{ alkid_did?: string }>(
    DID_KEY
  );
  return alkid_did ?? null;
}

export async function clearDid(): Promise<void> {
  await chrome.storage.local.remove(DID_KEY);
}

export async function setControllerKey(controllerPriv: string) {
  await chrome.storage.local.set({ [CONTROLLER_KEY]: controllerPriv });
}

export async function setRecoveryKey(recoveryPriv: string) {
  await chrome.storage.local.set({ [RECOVERY_KEY]: recoveryPriv });
}
