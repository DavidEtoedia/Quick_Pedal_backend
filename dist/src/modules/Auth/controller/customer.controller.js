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
const customer_1 = require("../usecases/customer");
const verify_otp_service_1 = __importDefault(require("../usecases/verify-otp.service"));
let CustomerauthController = class CustomerauthController {
    constructor(loginService, registerService, forgotPasswordService, changePasswordService, verifyOtpService) {
        this.loginService = loginService;
        this.registerService = registerService;
        this.forgotPasswordService = forgotPasswordService;
        this.changePasswordService = changePasswordService;
        this.verifyOtpService = verifyOtpService;
    }
    forgotPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.forgotPasswordService.execute(req, res, next);
        });
    }
    changePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.changePasswordService.execute(req, res, next);
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loginService.execute(req, res, next);
        });
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.registerService.execute(req, res, next);
        });
    }
    verifyOtp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyOtpService.execute(req, res, next);
        });
    }
};
CustomerauthController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [customer_1.LoginService,
        customer_1.RegisterService,
        customer_1.ForgotpasswordService,
        customer_1.ChangepasswordService,
        verify_otp_service_1.default])
], CustomerauthController);
exports.default = CustomerauthController;
//# sourceMappingURL=customer.controller.js.map