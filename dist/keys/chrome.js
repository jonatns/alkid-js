import * as secp from "@noble/secp256k1";
export async function generate() {
    const priv1 = secp.utils.randomSecretKey();
    const priv2 = secp.utils.randomSecretKey();
    const pub1 = secp.getPublicKey(priv1, true /* compressed */);
    const pub2 = secp.getPublicKey(priv2, true /* compressed */);
    const controllerPub = secp.etc.bytesToHex(pub1);
    const controllerPriv = secp.etc.bytesToHex(priv1);
    const recoveryPub = secp.etc.bytesToHex(pub2);
    const recoveryPriv = secp.etc.bytesToHex(priv2);
    return {
        controllerPub,
        controllerPriv,
        recoveryPub,
        recoveryPriv,
    };
}
//# sourceMappingURL=chrome.js.map