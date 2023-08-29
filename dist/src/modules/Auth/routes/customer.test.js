"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../../app"));
const supertest_1 = __importDefault(require("supertest"));
describe('customer auth endpoints', () => {
    describe('customer register', () => {
        test.only('successfully register', () => {
            const response = (0, supertest_1.default)(app_1.default).post('/api/v1/auth/register').send({
                email: "golden@gmail.com",
                phone: 2347016181313,
                password: "password",
                firstname: "golden",
                lastname: "maceteli",
                gender: "MALE"
            }).expect(400);
        });
    });
    describe('customer login', () => {
        test.only('successfully login', () => {
            const response = (0, supertest_1.default)(app_1.default).post('/api/v1/auth/login').send({
                email: "golden@gmail.com",
                password: "password",
            }).expect(201);
        });
    });
});
//# sourceMappingURL=customer.test.js.map