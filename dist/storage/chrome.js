import { ALKID_NAMESPACE } from "../constants";
const DID_KEY = `${ALKID_NAMESPACE}_did`;
const CONTROLLER_KEY = `${ALKID_NAMESPACE}_controller`;
const RECOVERY_KEY = `${ALKID_NAMESPACE}_recovery`;
export async function setDid(did) {
    await chrome.storage.local.set({ [DID_KEY]: did });
}
export async function getDid() {
    const { alkid_did } = await chrome.storage.local.get(DID_KEY);
    return alkid_did ?? null;
}
export async function clearDid() {
    await chrome.storage.local.remove(DID_KEY);
}
export async function setControllerKey(controllerPriv) {
    await chrome.storage.local.set({ [CONTROLLER_KEY]: controllerPriv });
}
export async function setRecoveryKey(recoveryPriv) {
    await chrome.storage.local.set({ [RECOVERY_KEY]: recoveryPriv });
}
//# sourceMappingURL=chrome.js.map