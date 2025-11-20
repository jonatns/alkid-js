import { reverseHex } from "../utils/hex";
export function createAlkanesClient({ transport, network, }) {
    return {
        network,
        transport,
        async getTrace({ vout, txid }) {
            const reversed = reverseHex(txid);
            return transport.request("alkanes_trace", [{ vout, txid: reversed }]);
        },
    };
}
//# sourceMappingURL=create.js.map