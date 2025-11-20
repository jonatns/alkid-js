export interface ChromeStartOptions {
    baseUrl?: string;
    network?: "mainnet" | "regtest";
}
export declare function start(options?: ChromeStartOptions): Promise<string>;
//# sourceMappingURL=chrome.d.ts.map