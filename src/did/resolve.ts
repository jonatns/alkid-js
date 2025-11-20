import type { AlkanesClient } from "../client";
import { validateDid, generateDid } from "../utils/did";

const FACTORY_ALKANE_ID = 65522;

interface ResolveDidOptions {
  txid: string;
  client: AlkanesClient;
  factoryId?: number;
  pollIntervalMs?: number;
}

/**
 * Resolve a DID from the Bitcoin txid produced by the AlkID UI.
 */
export async function resolveDidFromTx({
  txid,
  client,
  factoryId = FACTORY_ALKANE_ID,
  pollIntervalMs = 2000,
}: ResolveDidOptions): Promise<string> {
  // poll until the trace is ready
  let trace: any = null;

  for (;;) {
    try {
      trace = await client.getTrace({ vout: 4, txid });
      if (trace && trace.messages?.length) break;
    } catch (err) {
      // ignore until trace exists
    }
    await wait(pollIntervalMs);
  }

  // find the identity factory invocation
  const msg = trace.messages.find((m: any) => m.contractId === factoryId);

  if (!msg) {
    throw new Error(
      `Identity factory (contractId=${factoryId}) not found in trace for tx=${txid}`
    );
  }

  if (msg.status === "reject") {
    throw new Error(
      `Identity creation rejected. Reason: ${msg.error ?? "unknown"}`
    );
  }

  if (!("block" in msg) || !("index" in msg)) {
    throw new Error("Trace message is missing Alkane block/index.");
  }

  const did = generateDid(msg.block, msg.index);

  if (!validateDid(did)) {
    throw new Error(`Resolved DID is invalid: ${did}`);
  }

  return did;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
