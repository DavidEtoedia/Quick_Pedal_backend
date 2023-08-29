"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AddressSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});
exports.default = (0, mongoose_1.model)('Address', AddressSchema);
//# sourceMappingURL=address.schema.js.map