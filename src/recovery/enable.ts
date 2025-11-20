import { start } from "./start";
import { generateKeys } from "../keys";
import { resolveDidFromTx } from "../did";
import * as storage from "../storage";
import type { AlkanesClient } from "../client";
import { DEFAULT_BASE_URL } from "../constants";

interface EnableOptions {
  client: AlkanesClient;
  baseUrl?: string;
}

export async function enable(options: EnableOptions) {
  const { client, baseUrl = DEFAULT_BASE_URL } = options;

  const { controllerPriv, controllerPub, recoveryPriv, recoveryPub } =
    await generateKeys();

  const txid = await start({
    network: client.network,
    controller: controllerPub,
    recovery: recoveryPub,
    baseUrl,
  });

  const did = await resolveDidFromTx({
    txid,
    client,
  });

  await storage.setControllerKey(controllerPriv);
  await storage.setRecoveryKey(recoveryPriv);
  await storage.setDid(did);

  return {
    did,
    controller: controllerPriv,
    recovery: recoveryPriv,
  };
}
