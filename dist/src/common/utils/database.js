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
exports.deleteData = exports.updateData = exports.readsingleData = exports.readData = exports.createData = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("reflect-metadata");
const database_error_1 = require("../errors/database.error");
require('dotenv').config();
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect(`${process.env.STAGING_MONGODB_URL}`).then((res) => {
        console.log("Database connected");
    }).catch((err) => {
        throw new database_error_1.DatabaseError();
    });
});
exports.connect = connect;
const createData = (model, data) => {
    try {
        return model.create(data);
    }
    catch (err) {
        return err;
    }
};
exports.createData = createData;
const readData = (model, data, select) => {
    try {
        return model.find(data, select).sort({ created_at: -1 });
    }
    catch (err) {
        return err.message;
    }
};
exports.readData = readData;
const readsingleData = (model, data, select) => {
    try {
        return model.findOne(data, select);
    }
    catch (err) {
        return err.message;
    }
};
exports.readsingleData = readsingleData;
const updateData = (model, keyword, data) => {
    try {
        return model.findByIdAndUpdate(keyword, data);
    }
    catch (err) {
        return err.message;
    }
};
exports.updateData = updateData;
const deleteData = (model, keyword) => {
    try {
        return model.findByIdAndRemove(keyword);
    }
    catch (err) {
        return err.message;
    }
};
exports.deleteData = deleteData;
//# sourceMappingURL=database.js.map