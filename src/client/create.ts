import type { Transport } from "../transport";
import { reverseHex } from "../utils/hex";

export interface AlkanesClient {
  transport: Transport;
  network: "regtest" | "mainnet";

  getTrace(request: { vout: number; txid: string }): Promise<any>;
}

export function createAlkanesClient({
  transport,
  network,
}: {
  network: "regtest" | "mainnet";
  transport: Transport;
}): AlkanesClient {
  return {
    network,
    transport,

    async getTrace({ vout, txid }) {
      const reversed = reverseHex(txid);
      return transport.request("alkanes_trace", [{ vout, txid: reversed }]);
    },
  };
}
