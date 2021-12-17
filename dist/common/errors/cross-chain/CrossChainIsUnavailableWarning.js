"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainIsUnavailableError = void 0;
var rubic_sdk_error_1 = require("@common/errors/rubic-sdk-error");
var CrossChainIsUnavailableError = /** @class */ (function (_super) {
    __extends(CrossChainIsUnavailableError, _super);
    function CrossChainIsUnavailableError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrossChainIsUnavailableError;
}(rubic_sdk_error_1.RubicSdkError));
exports.CrossChainIsUnavailableError = CrossChainIsUnavailableError;
//# sourceMappingURL=CrossChainIsUnavailableWarning.js.map