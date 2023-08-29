"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_1 = require("./token");
test('successfully generate token', () => {
    jest.spyOn(jsonwebtoken_1.default, 'sign').mockImplementation(() => {
        return 'somerandomtoken';
    });
    const generate_token = (0, token_1.generateToken)({}, "somesecret");
    expect(generate_token).toBe('somerandomtoken');
});
test('successfully verify token', () => {
    jest.spyOn(jsonwebtoken_1.default, 'verify').mockImplementation(() => {
        return true;
    });
    const verify_token = (0, token_1.verifyToken)({}, "somesecret");
    expect(verify_token).toBe(true);
});
//# sourceMappingURL=token.test.js.map