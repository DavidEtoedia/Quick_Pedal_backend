"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const role_1 = require("../../constants/role");
const account_status_1 = require("../../constants/account_status");
const gender_1 = require("../../constants/gender");
const UserSchema = new mongoose_1.Schema({
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
        enum: gender_1.Gender,
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
        enum: account_status_1.AccountStatus,
        default: 'ACTIVE',
    },
    otp_reference: {
        type: String
    },
    role: {
        type: String,
        enum: role_1.Role
    }
});
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.schema.js.map