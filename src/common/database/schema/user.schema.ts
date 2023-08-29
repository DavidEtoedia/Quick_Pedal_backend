import mongoose, { Schema, model } from 'mongoose';
import { Role } from '../../constants/role';
import { AccountStatus } from '../../constants/account_status';
import { Gender } from '../../constants/gender';
import { User } from '../models/user.model';


const UserSchema: Schema = new Schema<User>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: Gender,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    is_email_verified: {
        type: Boolean,
        default: false
    },
    account_status: {
        type: String,
        enum: AccountStatus,
        required: true
    },
    otp_reference: {
        type: String
    },
    role: {
        type: String,
        enum: Role
    }
});

export default mongoose.model<User>('User', UserSchema)

