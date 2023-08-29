"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer = require('multer');
var multerS3 = require('multer-s3');
var aws = require('aws-sdk');
var s3 = new aws.S3({
    accessKeyId: process.env.ACCESSKEYID || "",
    secretAccessKey: process.env.SECRETACCESSKEY || "",
    Bucket: "storage-promptcomputers",
    region: "us-east-2"
});
var local_storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});
var s3_storage = multerS3({
    s3: s3,
    bucket: "storage-promptcomputers",
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        cb(null, Date.now().toString());
    }
});
exports.upload = multer({
    storage: s3_storage
});
//# sourceMappingURL=file.middleware.js.map