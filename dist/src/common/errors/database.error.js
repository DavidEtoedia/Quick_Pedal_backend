"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const custom_error_1 = require("./custom.error");
class DatabaseError extends custom_error_1.CustomError {
    constructor() {
        super('Error connecting to database');
        this.statusCode = 400;
        this.message = "Error connecting to database";
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
exports.DatabaseError = DatabaseError;
//# sourceMappingURL=database.error.js.map