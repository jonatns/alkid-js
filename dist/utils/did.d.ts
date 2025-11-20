export interface DidParts {
    block: number;
    txIndex: number;
}
export declare function validateDid(did: string): boolean;
export declare function parseDid(did: string): DidParts;
export declare function generateDid(block: number, txIndex: number): string;
export declare function isDid(value: any): value is string;
//# sourceMappingURL=did.d.ts.map