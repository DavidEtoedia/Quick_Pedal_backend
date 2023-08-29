import { injectable } from "tsyringe";
import { ISendEmail } from "../services/dto/send-email";
import AWS from 'aws-sdk'
import ErrorService from "../services/ErrorService";
require('dotenv').config();

@injectable()
export default class EmailService {

    

    constructor(
        private errorService: ErrorService
    ) {
        AWS.config.update({region: process.env.AWS_REGION})
    }

    async sendEmail(args: ISendEmail): Promise<void> {
        console.log(`email: ${process.env.AWS_SES_EMAIL}`);
        
        let params = {
            Destination: { /* required */
            ToAddresses: [
              args.receiverEmailAddress,
              /* more To email addresses */
            ]
          },
          Source: `${process.env.AWS_SES_EMAIL}`, /* required */
          Template: `${args.templateName}`, /* required */
          TemplateData: `${args.templateData}`, /* required */
        }

        const send = new AWS.SES({ apiVersion: '2010-12-01' }).sendTemplatedEmail(params).promise()
        
        send.then((res: any) => {
            console.log(res)
        }).catch((err: any) => {
            console.log(err.message)
            this.errorService.captureError(err);
        })
    }

    async createTemplate(): Promise<void> {

    }
}