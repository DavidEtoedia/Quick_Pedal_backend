import { Schema, model } from "mongoose";
import { Delivery } from "../models/delivery.model";

const DeliverySchema: Schema = new Schema<Delivery>({
    reference: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.ObjectId,
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

export default model<Delivery>('Delivery', DeliverySchema);