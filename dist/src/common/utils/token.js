"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (payload, secret) => {
    const token = jsonwebtoken_1.default.sign(payload, secret);
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (payload, secret) => {
    return jsonwebtoken_1.default.verify(payload, secret);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.js.map