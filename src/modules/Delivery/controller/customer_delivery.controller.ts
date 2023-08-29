import { injectable } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import CreateDeliveryService from "../usecases/customer/create_delivery.service";
import ScheduleDeliveryService from "../usecases/customer/schedule_delivery.service";
import GetDeliveriesService from "../usecases/customer/get_deliveries.service";

@injectable()
export default class CustomerDeliveryController {
    constructor(
        private createDeliveryService: CreateDeliveryService,
        private scheduleDeliveryService: ScheduleDeliveryService,
        private getDeliveriesService: GetDeliveriesService
    ){

    }

    async createDelivery(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.createDeliveryService.execute(req, res, next);
    }

    async scheduleDelivery(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.scheduleDeliveryService.execute(req, res, next);
    }

    async getDeliveries(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.getDeliveriesService.execute(req, res, next);
    }
}