"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZrxApiBaseUrl = void 0;
const errors_1 = require("src/common/errors");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/zrx-abstract/constants");
function getZrxApiBaseUrl(blockchain) {
    const { apiBaseUrl } = constants_1.zrxApiParams;
    if (!Object.keys(apiBaseUrl).includes(blockchain)) {
        throw new errors_1.PathrSdkError(`Zrx doesn't support ${blockchain} blockchain`);
    }
    return apiBaseUrl[blockchain];
}
exports.getZrxApiBaseUrl = getZrxApiBaseUrl;
//# sourceMappingURL=utils.js.map