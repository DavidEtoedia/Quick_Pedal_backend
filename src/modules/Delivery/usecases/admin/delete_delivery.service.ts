import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../../common/utils";
import { IService } from "../../../../common/interfaces";
import DeliveryRepository from "../../../../common/database/repository/delivery.repository";

@injectable()
export default class DeleteDeliveryService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private deliveryRepository: DeliveryRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { id } = req.params;


            await this.deliveryRepository.deleteDelivery(id)

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "successfully delete delivery",
            });
        }catch(err: any){
            next(err)
        }
    }
}