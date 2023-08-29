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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const encrypt_1 = require("./encrypt");
test('hash a string', () => __awaiter(void 0, void 0, void 0, function* () {
    jest.spyOn(bcryptjs_1.default, 'genSalt').mockImplementation(() => {
        return 123;
    });
    jest.spyOn(bcryptjs_1.default, 'hash').mockImplementation(() => {
        return '123456789';
    });
    const hashString = yield (0, encrypt_1.hash)('password');
    expect(hashString).toBe('123456789');
}));
test('compare hash', () => __awaiter(void 0, void 0, void 0, function* () {
    jest.spyOn(bcryptjs_1.default, 'compare').mockImplementation(() => {
        return true;
    });
    const comparedHashResult = yield (0, encrypt_1.compareHash)('password', 'databasepassword');
    expect(comparedHashResult).toBe(true);
}));
//# sourceMappingURL=encrypt.test.js.map