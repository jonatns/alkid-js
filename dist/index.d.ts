/**
 * AlkID JS SDK
 * @module @alkid/alkid-js
 */
import * as recoveryImpl from "./recovery";
import * as storageImpl from "./storage";
export declare const alkid: {
    recovery: typeof recoveryImpl;
    storage: typeof storageImpl;
};
export * from "./utils/did";
export * from "./transport";
export * from "./client";
export * from "./recovery";
export * from "./storage";
export * from "./constants";
export * from "./keys";
export * from "./did";
export * from "./env";
export default alkid;
//# sourceMappingURL=index.d.ts.map