/**
 * AlkID JS SDK
 * @module @alkid/alkid-js
 */
import * as recoveryImpl from "./recovery";
import * as storageImpl from "./storage";
export const alkid = {
    recovery: recoveryImpl,
    storage: storageImpl,
};
export * from "./utils/did";
export default alkid;
//# sourceMappingURL=index.js.map