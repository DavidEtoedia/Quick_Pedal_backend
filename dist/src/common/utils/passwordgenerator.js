"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
const generatePassword = (passwordLength) => {
    return Math.random().toString(36).slice(-passwordLength);
};
exports.generatePassword = generatePassword;
//# sourceMappingURL=passwordgenerator.js.map