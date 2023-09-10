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
const utils_1 = require("../../../../common/utils");
const services_1 = require("../../../../common/services");
const user_repository_1 = __importDefault(require("../../../../common/database/repository/user.repository"));
const notfound_error_1 = require("../../../../common/errors/notfound.error");
let LoginService = class LoginService {
    constructor(userRepository, errorService, httpService) {
        this.userRepository = userRepository;
        this.errorService = errorService;
        this.httpService = httpService;
    }
    execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // Check if user exists
                const user = yield this.userRepository.getUser({ email: email.toLowerCase() });
                if (!user) {
                    throw new notfound_error_1.NotFoundError('User email not found');
                }
                // check password 
                const checkpassword = yield (0, utils_1.compareHash)(password, user.password);
                if (!checkpassword) {
                    throw new notfound_error_1.NotFoundError('User password is wrong');
                }
                const userdetails = {
                    username: user.firstname,
                    id: user._id,
                    email: user.email
                };
                const generatedToken = yield (0, utils_1.generateToken)(userdetails, `${process.env.SECRET}`);
                const responseData = {
                    token: generatedToken,
                    user: {
                        firstname: user.firstname,
                        id: user._id,
                        email: user.email,
                        role: user.role
                    }
                };
                this.httpService.Response({
                    res,
                    status: "success",
                    message: "Account Authorized",
                    data: responseData
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
};
LoginService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [user_repository_1.default,
        services_1.ErrorService,
        utils_1.Http])
], LoginService);
exports.default = LoginService;
//# sourceMappingURL=login.service.js.map