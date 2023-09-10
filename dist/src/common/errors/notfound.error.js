"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom.error");
class NotFoundError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [{
                status: "error",
                statusCode: this.statusCode,
                message: this.message
            }];
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=notfound.error.js.map