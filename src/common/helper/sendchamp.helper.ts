import axios from "axios";
import { injectable } from "tsyringe";

export interface ISendEmail {
    subject: string;
    toEmail: string;
    toName: string;
    message: string;
}

const SENDCHAMP_API_KEY = process.env.SENDCHAMP_API_KEY || ''

@injectable()
export default class SendchampHelper {
    constructor(){

    }

    async sendEmail(args: ISendEmail){
        return await axios.post('https://api.sendchamp.com/api/v1/email/send', {
            subject: args.subject,
            to: [{email: args.toEmail, name: args.toName}],
            message_body: {type: 'text/html', value: args.message}
        }, {
            headers: {
                'Authorization': `Bearer ${SENDCHAMP_API_KEY}`,
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        })
    }

    async sendOTP(phone_number: string, description: string) {
        return await axios.post('https://api.sendchamp.com/api/v1/verification/create', {
            channel: 'sms',
            sender: 'SAlert',
            token_type: 'numeric',
            token_length: 4,
            expiration_time: 10,
            customer_mobile_number: phone_number,
            meta_data: {description: description ? description : ''},
            in_app_token: false
        }, {
            headers: {
                'Authorization': `Bearer ${SENDCHAMP_API_KEY}`,
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        })
    }

    async verifyOTP(){

    }
}