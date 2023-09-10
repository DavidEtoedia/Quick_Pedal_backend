"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const custom_error_1 = require("../errors/custom.error");
const errorMiddleware = (err, req, res, next) => {
    if (err instanceof custom_error_1.CustomError) {
        console.log('Err: ' + err.serializeErrors());
        return res.status(err.statusCode).json({ message: err.message });
    }
    res.status(500).send({
        errors: [{ message: 'Something went wrong' }]
    });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map