"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./common/config/server"));
const app_1 = __importDefault(require("./app"));
require('dotenv').config();
const server = new server_1.default(app_1.default);
server.start();
//# sourceMappingURL=index.js.map