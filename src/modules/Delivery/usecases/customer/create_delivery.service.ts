import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../../common/utils";
import { IService } from "../../../../common/interfaces";
import DeliveryRepository from "../../../../common/database/repository/delivery.repository";
import { generateReference } from "../../../../common/utils/reference-generator.util";
import PayStackHelper from "../../../../common/helper/paystack.helper";
import TransactionRepository from "../../../../common/database/repository/transaction.repository";


@injectable()
export default class CreateDeliveryService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private deliveryRepository: DeliveryRepository,
        private paystackHelper: PayStackHelper,
        private transactionRepository: TransactionRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { user, sender_location, recipient_location, recipient_phone, delivery_cost, distance } = req.body;

            const reference = generateReference()

            const createDelivery = await this.deliveryRepository.addDelivery({
                reference,
                sender: user.id,
                sender_location,
                recipient_location,
                recipient_phone,
                distance,
                delivery_cost
            });

            await this.transactionRepository.addTransaction({
                ref: reference,
                delivery: createDelivery._id
            })

            const paymentLink = await this.paystackHelper.initializeTransaction({
                amount: delivery_cost.toString(),
                email: user.email,
                reference
            })

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "order successfully created",
                data: paymentLink
            });
        }catch(err: any){
            next()
        }
    }
}