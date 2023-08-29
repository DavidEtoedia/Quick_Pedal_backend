"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerAuthRouter = exports.adminAuthRouter = void 0;
const admin_route_1 = __importDefault(require("./admin.route"));
exports.adminAuthRouter = admin_route_1.default;
const customer_route_1 = __importDefault(require("./customer.route"));
exports.customerAuthRouter = customer_route_1.default;
//# sourceMappingURL=index.js.map