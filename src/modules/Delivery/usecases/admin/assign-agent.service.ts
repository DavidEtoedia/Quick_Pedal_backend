import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../../common/utils";
import { IService } from "../../../../common/interfaces";
import DeliveryRepository from "../../../../common/database/repository/delivery.repository";

@injectable()
export default class AssignAgentService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private deliveryRepository: DeliveryRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { id } = req.params;

            const { delivery_agent, delivery_agent_phone} = req.body;

            const assignAgent = await this.deliveryRepository.updateDelivery({
                _id: id
            }, {
                delivery_agent,
                delivery_agent_phone
            });

            //TODO:change ticket status and send notification
            
            this.httpHttp.Response({  
                res,
                status: "success",
                message: "successfully assign agents",
                data: assignAgent
            })
        }catch(err: any){
            next()
        }
    }
}