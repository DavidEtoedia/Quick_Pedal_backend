"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TransactionSchema = new mongoose_1.Schema({
    ref: {
        type: String,
        required: true
    },
    delivery: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'Delivery',
        required: true
    },
    status: {
        type: String,
        enum: ['PENDING', 'SUCCESS'],
        default: 'PENDING'
    }
});
exports.default = (0, mongoose_1.model)('Transaction', TransactionSchema);
//# sourceMappingURL=transaction.schema.js.map