import { injectable } from "tsyringe";
const formidable = require('formidable');
import path from "path";
import AWS from "aws-sdk";
import fs, { ReadStream } from "fs";
import { Request, request } from "express";
import TicketattachmentRepository from "../../modules/Ticket/repositories/TicketAttachement";


//TODO: integrate a key management. STS

@injectable()
export default class FileService {

    constructor(
        private ticketAttachment: TicketattachmentRepository
    ) {}

    async uploadFile(req: Request) {
   
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
        console.log(req.files)
        const { files } = req;

        ( files as unknown as Array<{ [fieldname: string]: File[]; } | File[] | undefined > ).map((Number: any)=>{
            console.log(Number)
        })
       
        return true
    }
}