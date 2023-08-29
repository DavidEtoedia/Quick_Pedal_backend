"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
let ErrorService = class ErrorService {
    constructor() { }
    captureError(error, meta) {
    }
    emailAlreadyExist(meta) {
        const error = new Error('Email already exist');
        this.captureError(error);
        throw error;
    }
    phoneAlreadyExist(meta) {
        const error = new Error('Phone already exist');
        this.captureError(error);
        throw error;
    }
    emailNotFound(meta) {
        const error = new Error('Email not found');
        this.captureError(error);
        throw error;
        return;
    }
    wrongPassword(meta) {
        const error = new Error('Incorrect password');
        this.captureError(error);
        throw error;
    }
    userNotAuthorized(meta) {
        const error = new Error('Sorry this account is not authorized');
        this.captureError(error, meta);
        throw error;
    }
};
ErrorService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], ErrorService);
exports.default = ErrorService;
//# sourceMappingURL=ErrorService.js.map