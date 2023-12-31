"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const tsyringe_1 = require("tsyringe");
const SENDCHAMP_API_KEY = process.env.SENDCHAMP_API_KEY || '';
let SendchampHelper = class SendchampHelper {
    constructor() {
    }
    sendEmail(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.post('https://api.sendchamp.com/api/v1/email/send', {
                subject: args.subject,
                to: [{ email: args.toEmail, name: args.toName }],
                message_body: { type: 'text/html', value: args.message }
            }, {
                headers: {
                    'Authorization': `Bearer ${SENDCHAMP_API_KEY}`,
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            });
        });
    }
    sendOTP(phone_number, description) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.post('https://api.sendchamp.com/api/v1/verification/create', {
                channel: 'sms',
                sender: 'SAlert',
                token_type: 'numeric',
                token_length: 4,
                expiration_time: 10,
                customer_mobile_number: phone_number,
                meta_data: { description: description ? description : '' },
                in_app_token: false
            }, {
                headers: {
                    'Authorization': `Bearer ${SENDCHAMP_API_KEY}`,
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            });
        });
    }
    verifyOTP() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
SendchampHelper = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], SendchampHelper);
exports.default = SendchampHelper;
//# sourceMappingURL=sendchamp.helper.js.map