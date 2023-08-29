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
const get_user_service_1 = __importDefault(require("../usecase/get-user.service"));
const update_user_service_1 = __importDefault(require("../usecase/update-user.service"));
const change_password_service_1 = __importDefault(require("../usecase/change-password.service"));
const deactivate_account_service_1 = __importDefault(require("../usecase/deactivate-account.service"));
let CustomerUserController = class CustomerUserController {
    constructor(getUserService, updateUserService, changePasswordService, deactivateAccountService) {
        this.getUserService = getUserService;
        this.updateUserService = updateUserService;
        this.changePasswordService = changePasswordService;
        this.deactivateAccountService = deactivateAccountService;
    }
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserService.execute(req, res, next);
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateUserService.execute(req, res, next);
        });
    }
    changePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.changePasswordService.execute(req, res, next);
        });
    }
    deactivateAccount(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deactivateAccountService.execute(req, res, next);
        });
    }
};
CustomerUserController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [get_user_service_1.default,
        update_user_service_1.default,
        change_password_service_1.default,
        deactivate_account_service_1.default])
], CustomerUserController);
exports.default = CustomerUserController;
//# sourceMappingURL=customer.controller.js.map