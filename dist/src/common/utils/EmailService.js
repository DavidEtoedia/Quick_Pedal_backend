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
const tsyringe_1 = require("tsyringe");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const ErrorService_1 = __importDefault(require("../services/ErrorService"));
require('dotenv').config();
let EmailService = class EmailService {
    constructor(errorService) {
        this.errorService = errorService;
        aws_sdk_1.default.config.update({ region: process.env.AWS_REGION });
    }
    sendEmail(args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`email: ${process.env.AWS_SES_EMAIL}`);
            let params = {
                Destination: {
                    ToAddresses: [
                        args.receiverEmailAddress,
                        /* more To email addresses */
                    ]
                },
                Source: `${process.env.AWS_SES_EMAIL}`,
                Template: `${args.templateName}`,
                TemplateData: `${args.templateData}`, /* required */
            };
            const send = new aws_sdk_1.default.SES({ apiVersion: '2010-12-01' }).sendTemplatedEmail(params).promise();
            send.then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err.message);
                this.errorService.captureError(err);
            });
        });
    }
    createTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
EmailService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [ErrorService_1.default])
], EmailService);
exports.default = EmailService;
//# sourceMappingURL=EmailService.js.map