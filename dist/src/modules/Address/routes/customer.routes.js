"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const customer_controller_1 = __importDefault(require("../controller/customer.controller"));
const AuthMiddleware_1 = __importDefault(require("../../../common/middlewares/AuthMiddleware"));
const customerAddressRouter = (0, express_1.Router)();
const controller = tsyringe_1.container.resolve(customer_controller_1.default);
customerAddressRouter.get('/:id', AuthMiddleware_1.default, (req, res, next) => controller.getAddress(req, res, next));
customerAddressRouter.get('/', AuthMiddleware_1.default, (req, res, next) => controller.getAddresses(req, res, next));
customerAddressRouter.post('/create', AuthMiddleware_1.default, (req, res, next) => controller.createAddress(req, res, next));
customerAddressRouter.patch('/:id', AuthMiddleware_1.default, (req, res, next) => controller.updateAddress(req, res, next));
customerAddressRouter.delete('/:id', AuthMiddleware_1.default, (req, res, next) => controller.deleteAddress(req, res, next));
exports.default = customerAddressRouter;
//# sourceMappingURL=customer.routes.js.map