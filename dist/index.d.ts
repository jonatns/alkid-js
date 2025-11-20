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
export default alkid;
//# sourceMappingURL=index.d.ts.map