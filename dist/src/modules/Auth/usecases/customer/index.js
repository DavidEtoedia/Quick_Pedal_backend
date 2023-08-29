"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangepasswordService = exports.RegisterService = exports.LoginService = exports.ForgotpasswordService = void 0;
const changepassword_service_1 = __importDefault(require("./changepassword.service"));
exports.ChangepasswordService = changepassword_service_1.default;
const forgotpassword_service_1 = __importDefault(require("./forgotpassword.service"));
exports.ForgotpasswordService = forgotpassword_service_1.default;
const login_service_1 = __importDefault(require("./login.service"));
exports.LoginService = login_service_1.default;
const register_service_1 = __importDefault(require("./register.service"));
exports.RegisterService = register_service_1.default;
//# sourceMappingURL=index.js.map