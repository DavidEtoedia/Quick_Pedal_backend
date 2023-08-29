import { injectable } from "tsyringe";
import axios from 'axios';

const SECRET_KEY = process.env.PAYSTACK_API_KEY || '';

export interface IinitializeTransaction {
    amount: string;
    reference: string;
    email: string;
}

@injectable()
export default class PayStackHelper {
    constructor(){

    }

    async initializeTransaction(args: IinitializeTransaction){
        const response = await axios.post('api.paystack.co/transaction/initialize', {
            ...args,
            channels: ['card', 'bank', 'bank_transfer']
        },{
            headers: {
                Authorization: `Bearer ${SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data
    }
}