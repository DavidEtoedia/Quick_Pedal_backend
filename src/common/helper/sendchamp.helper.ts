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
            from: {email: 'logistics@gmail.com', name: 'logistics'},
            message_body: {type: 'text/html', value: args.message}
        }, {
            headers: {
                'Authorization': `Bearer ${SENDCHAMP_API_KEY}`,
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        })
    }
}