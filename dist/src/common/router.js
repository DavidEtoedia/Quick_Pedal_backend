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
exports.AGENT_BASE_URL = exports.ADMIN_BASE_URL = exports.BASE_URL = exports.router = void 0;
const customer_route_1 = __importDefault(require("../modules/Auth/routes/customer.route"));
const express_1 = require("express");
const customer_routes_1 = __importDefault(require("../modules/Address/routes/customer.routes"));
const customer_route_2 = __importDefault(require("../modules/Delivery/route/customer.route"));
const cutomer_routes_1 = __importDefault(require("../modules/User/routes/cutomer.routes"));
exports.router = (0, express_1.Router)({});
exports.router.get('/', (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    let healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
        res.status(200);
    }
    catch (error) {
        res.send(error.message);
        res.status(503).send();
    }
}));
exports.BASE_URL = "/api/v1";
exports.ADMIN_BASE_URL = `${exports.BASE_URL}/admin`;
exports.AGENT_BASE_URL = `${exports.BASE_URL}/agent`;
function moduleRouters(app) {
    app.use('/health_check', exports.router);
    /** CUSTOMER ROUTES */
    app.use(`${exports.BASE_URL}/auth`, customer_route_1.default);
    app.use(`${exports.BASE_URL}/delivery`, customer_route_2.default);
    app.use(`${exports.BASE_URL}/address`, customer_routes_1.default);
    app.use(`${exports.BASE_URL}/user`, cutomer_routes_1.default);
    //   /** ADMIN ROUTES */
    //   app.use(`${ADMIN_BASE_URL}/auth`, adminAuthRouter);
    //   /** AGENT ROUTES */
    //   app.use(`${AGENT_BASE_URL}/auth`, agentAuthRouter);
}
exports.default = moduleRouters;
//# sourceMappingURL=router.js.map