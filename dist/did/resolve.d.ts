import type { AlkanesClient } from "../client";
interface ResolveDidOptions {
    txid: string;
    client: AlkanesClient;
    factoryId?: number;
    pollIntervalMs?: number;
}
/**
 * Resolve a DID from the Bitcoin txid produced by the AlkID UI.
 */
export declare function resolveDidFromTx({ txid, client, factoryId, pollIntervalMs, }: ResolveDidOptions): Promise<string>;
export {};
//# sourceMappingURL=resolve.d.ts.map