import * as secp from "@noble/secp256k1";
import { sha256 } from "@noble/hashes/sha2.js";

function pubkeyToU128Hex(pubHex: string): string {
  const bytes = secp.etc.hexToBytes(pubHex);

  // SHA-256(pubkey) → 32 bytes
  const hash = sha256(bytes);

  // take first 16 bytes (128 bits)
  const first16 = hash.slice(0, 16);

  // convert those 16 bytes to hex
  return secp.etc.bytesToHex(first16);
}

export async function generateKeys() {
  const priv1 = secp.utils.randomSecretKey();
  const priv2 = secp.utils.randomSecretKey();

  const pub1 = secp.getPublicKey(priv1, true); // compressed
  const pub2 = secp.getPublicKey(priv2, true);

  const controllerPubHex = secp.etc.bytesToHex(pub1);
  const recoveryPubHex = secp.etc.bytesToHex(pub2);

  const controllerU128Hex = pubkeyToU128Hex(controllerPubHex);
  const recoveryU128Hex = pubkeyToU128Hex(recoveryPubHex);

  return {
    controllerPriv: secp.etc.bytesToHex(priv1),
    controllerPub: controllerU128Hex,
    recoveryPriv: secp.etc.bytesToHex(priv2),
    recoveryPub: recoveryU128Hex,
  };
}
