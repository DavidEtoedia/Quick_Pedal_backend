import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../../common/utils";
import { IService } from "../../../../common/interfaces";
import DeliveryRepository from "../../../../common/database/repository/delivery.repository";

@injectable()
export default class GetDeliveryService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private deliveryRepository: DeliveryRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { id } = req.params;

            const deliveries = await this.deliveryRepository.getDeliverys({_id: id})

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "successfully fetch delivery",
                data: deliveries
            });
        }catch(err: any){
            next(err)
        }
    }
}