"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReference = void 0;
const uuid_1 = require("uuid");
const generateReference = () => {
    const random_string = (0, uuid_1.v4)();
    return `${random_string}`;
};
exports.generateReference = generateReference;
//# sourceMappingURL=reference-generator.util.js.map