import type { AlkanesClient } from "../client";
interface EnableOptions {
    client: AlkanesClient;
    baseUrl?: string;
}
export declare function enable(options: EnableOptions): Promise<{
    did: string;
    controller: string;
    recovery: string;
}>;
export {};
//# sourceMappingURL=enable.d.ts.map