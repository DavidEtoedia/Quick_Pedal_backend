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
const customerUserRouter = (0, express_1.Router)();
const controller = tsyringe_1.container.resolve(customer_controller_1.default);
customerUserRouter.get('/get-user', AuthMiddleware_1.default, (req, res, next) => controller.getUser(req, res, next));
customerUserRouter.patch('/change-password', AuthMiddleware_1.default, (req, res, next) => controller.changePassword(req, res, next));
customerUserRouter.patch('/edit-profile', AuthMiddleware_1.default, (req, res, next) => controller.updateUser(req, res, next));
customerUserRouter.patch('/deactivate-account', AuthMiddleware_1.default, (req, res, next) => controller.deactivateAccount(req, res, next));
exports.default = customerUserRouter;
//# sourceMappingURL=cutomer.routes.js.map