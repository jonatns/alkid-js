export interface StartOptions {
    controller: string;
    recovery: string;
    network: "mainnet" | "regtest";
    baseUrl?: string;
    redirectUri?: string;
}
export declare function start(options: StartOptions): Promise<string>;
//# sourceMappingURL=start.d.ts.map