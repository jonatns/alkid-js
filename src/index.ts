/**
 * AlkID JS SDK
 * @module @alkid/alkid-js
 */

import * as recoveryImpl from "./recovery";
import * as storageImpl from "./storage";
import * as utils from "./utils";

export const alkid = {
  recovery: recoveryImpl,
  storage: storageImpl,
  utils,
};

export default alkid;
