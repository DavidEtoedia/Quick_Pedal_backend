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
require("reflect-metadata");
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const customer_delivery_controller_1 = __importDefault(require("../controller/customer_delivery.controller"));
const AuthMiddleware_1 = __importDefault(require("../../../common/middlewares/AuthMiddleware"));
const transaction_repository_1 = __importDefault(require("../../../common/database/repository/transaction.repository"));
const customerDeliveryRouter = (0, express_1.Router)();
const controller = tsyringe_1.container.resolve(customer_delivery_controller_1.default);
const transactionRepository = tsyringe_1.container.resolve(transaction_repository_1.default);
customerDeliveryRouter.get('/get-deliveries', AuthMiddleware_1.default, (req, res, next) => controller.getDeliveries(req, res, next));
customerDeliveryRouter.post('/create-delivery', AuthMiddleware_1.default, (req, res, next) => controller.createDelivery(req, res, next));
customerDeliveryRouter.post('/schedule-delivery', AuthMiddleware_1.default, (req, res, next) => controller.scheduleDelivery(req, res, next));
customerDeliveryRouter.post("/payment/webhook", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Retrieve the request's body
        const event = req.body;
        if (event.event === "charge.success") {
            yield transactionRepository.updateTransaction({ ref: event.data.reference }, {
                status: "SUCCESS"
            });
        }
        // Do something with event
        res.send(200);
    });
});
exports.default = customerDeliveryRouter;
//# sourceMappingURL=customer.route.js.map