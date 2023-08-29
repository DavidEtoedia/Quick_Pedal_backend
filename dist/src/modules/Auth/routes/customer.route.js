"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const controller_1 = require("../controller");
const customerAuthRouter = (0, express_1.Router)();
const controller = tsyringe_1.container.resolve(controller_1.CustomerauthController);
customerAuthRouter.post('/login', (req, res, next) => controller.login(req, res, next));
customerAuthRouter.post('/register', (req, res, next) => controller.register(req, res, next));
customerAuthRouter.post('/forgotpassword', (req, res, next) => controller.forgotPassword(req, res, next));
customerAuthRouter.patch('/changepassword', (req, res, next) => controller.changePassword(req, res, next));
customerAuthRouter.post('/verify-otp', (req, res, next) => controller.verifyOtp(req, res, next));
exports.default = customerAuthRouter;
//# sourceMappingURL=customer.route.js.map