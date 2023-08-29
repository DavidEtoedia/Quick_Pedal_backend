"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const SECRET_KEY = process.env.SECRET || "";
function userAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authHeader = req.headers.authorization;
            console.log(authHeader);
            if (!authHeader || !authHeader.split(' ')[1]) {
                res.json({
                    status: "error",
                    message: 'Not authorized to take this action'
                });
            }
            const accesstoken = authHeader && authHeader.split(' ')[1];
            const verify = yield (0, utils_1.verifyToken)(accesstoken, `${SECRET_KEY}`);
            console.log(verify);
            if (!verify) {
                res.json({
                    status: "error",
                    message: 'Not authorized to take this action'
                });
            }
            else {
                req.body.user = verify;
            }
            next();
        }
        catch (err) {
            res.json({
                status: "error",
                message: err.message
            });
            next();
        }
    });
}
exports.default = userAuth;
//# sourceMappingURL=AuthMiddleware.js.map