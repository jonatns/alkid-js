import type { Transport } from "../transport";
export interface AlkanesClient {
    transport: Transport;
    network: "regtest" | "mainnet";
    getTrace(request: {
        vout: number;
        txid: string;
    }): Promise<any>;
}
export declare function createAlkanesClient({ transport, network, }: {
    network: "regtest" | "mainnet";
    transport: Transport;
}): AlkanesClient;
//# sourceMappingURL=create.d.ts.map