"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DeliverySchema = new mongoose_1.Schema({
    reference: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    sender_location: {
        type: String,
        required: true
    },
    recipient_location: {
        type: String,
        required: true
    },
    recipient_phone: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    delivery_cost: {
        type: Number,
        required: true
    },
    delivery_status: {
        type: String,
        enum: [''],
    },
    delivery_agent: {
        type: String,
    },
    delivery_agent_phone: {
        type: Number
    },
    schedule_time: {
        type: Date
    }
});
exports.default = (0, mongoose_1.model)('Delivery', DeliverySchema);
//# sourceMappingURL=delivery.schema.js.map