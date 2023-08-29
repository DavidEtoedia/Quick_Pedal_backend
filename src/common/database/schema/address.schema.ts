import { Schema, model } from "mongoose";
import { Address } from "../models/address.model";

const AddressSchema: Schema = new Schema<Address>({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

export default model<Address>('Address', AddressSchema)