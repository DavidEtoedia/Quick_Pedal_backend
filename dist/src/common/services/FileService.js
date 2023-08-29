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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const formidable = require('formidable');
const TicketAttachement_1 = __importDefault(require("../../modules/Ticket/repositories/TicketAttachement"));
//TODO: integrate a key management. STS
let FileService = class FileService {
    constructor(ticketAttachment) {
        this.ticketAttachment = ticketAttachment;
    }
    uploadFile(req) {
        return __awaiter(this, void 0, void 0, function* () {
            // // Set the region 
            // AWS.config.update({region: "us-east-2"});
            // // Create S3 service object
            // var s3 = new AWS.S3({apiVersion: '2006-03-01'});
            // // call S3 to retrieve upload file to specified bucket
            // var uploadParams:{ Bucket: string; Key: string; Body: string | ReadStream } = {Bucket: "storage-promptcomputers", Key: '', Body: ''};
            // var file = req.files?.file;
            // // Configure the file stream and obtain the upload parameters
            // console.log(file)
            // var fileStream = fs.createReadStream(file.tempFilePath);
            // fileStream.on('error', function(err: any) {
            //     console.log('File Error', err);
            // });
            // uploadParams.Body = fileStream;
            // uploadParams.Key = path.basename(file?.name);
            // // call S3 to retrieve upload file to specified bucket
            // return s3.upload (uploadParams, function (err: any, data: any) {
            //     if (err) {
            //         console.log("Error", err);
            //     } if (data) {
            //         console.log("Upload Success", data.Location);
            //     }
            // });
            console.log(req.files);
            const { files } = req;
            files.map((Number) => {
                console.log(Number);
            });
            return true;
        });
    }
};
FileService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof TicketAttachement_1.default !== "undefined" && TicketAttachement_1.default) === "function" ? _a : Object])
], FileService);
exports.default = FileService;
//# sourceMappingURL=FileService.js.map