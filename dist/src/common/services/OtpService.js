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
const tsyringe_1 = require("tsyringe");
const EmailService_1 = __importDefault(require("../utils/EmailService"));
const generateOtp_util_1 = require("../utils/generateOtp.util");
const utils_1 = require("../utils");
const user_repository_1 = __importDefault(require("../database/repository/user.repository"));
const sendchamp_helper_1 = __importDefault(require("../helper/sendchamp.helper"));
let OtpService = class OtpService {
    constructor(emailService, sendchampHelper, userRepository) {
        this.emailService = emailService;
        this.sendchampHelper = sendchampHelper;
        this.userRepository = userRepository;
    }
    sendOtp(subject, email, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const generatedOtp = (0, generateOtp_util_1.generateOtp)();
            const createOtpToken = yield (0, utils_1.hash)(generatedOtp.toString());
            const user = yield this.userRepository.updateUser({ _id: id }, { otp_reference: createOtpToken });
            yield this.sendchampHelper.sendEmail({
                subject,
                toEmail: email,
                toName: `${user.firstname} ${user.lastname}`,
                message: `${generatedOtp}`
            });
            return {
                otp: generatedOtp,
                user
            };
        });
    }
    verifyOtp(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDetails = yield this.userRepository.getUser({ _id: args.id });
            const otp_reference = userDetails.otp_reference;
            if (!otp_reference) {
                throw new Error("seems otp has expired");
            }
            const isTokenVerified = (0, utils_1.compareHash)(args.otp.toString(), otp_reference);
            if (!isTokenVerified) {
                throw new Error("wrong otp provided");
            }
            const user = yield this.userRepository.updateUser({ _id: args.id }, { otp_reference: null });
            return user;
        });
    }
};
OtpService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [EmailService_1.default,
        sendchamp_helper_1.default,
        user_repository_1.default])
], OtpService);
exports.default = OtpService;
//# sourceMappingURL=OtpService.js.map