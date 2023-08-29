
import { Schema, model } from "mongoose";
import Transaction from "../models/transaction.model";

const TransactionSchema: Schema = new Schema<Transaction>({
    ref: {
        type: String,
        required: true
    },
    delivery: {
        type: Schema.ObjectId,
        ref: 'Delivery',
        required: true
    },
    status: {
        type: String,
        enum: [ 'PENDING', 'SUCCESS'],
        default: 'PENDING'
    }
})

export default model<Transaction>('Transaction', TransactionSchema);