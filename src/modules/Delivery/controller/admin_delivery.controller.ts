import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import AssignAgentService from "../usecases/admin/assign-agent.service";
import DeleteDeliveryService from "../usecases/admin/delete_delivery.service";
import UpdateDeliveryService from "../usecases/admin/update_delivery.service";
import GetDeliveryService from "../usecases/admin/get_delivery.service";
import GetDeliveriesService from "../usecases/admin/get_deliveries.service";

@injectable()
export default class AdminDeliveryController {
    constructor(
        private assignAgentService: AssignAgentService,
        private deleteDeliveryService: DeleteDeliveryService,
        private updateDeliveryService: UpdateDeliveryService,
        private getDeliveryService: GetDeliveryService,
        private getDeliveriesService: GetDeliveriesService
    ) {

    }

    async assignAgent(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.assignAgentService.execute(req, res, next);
    }

    async deleteDelivery(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.deleteDeliveryService.execute(req, res, next);
    }

    async updateDelivery(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.updateDeliveryService.execute(req, res, next);
    }

    async getDelivery(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.getDeliveryService.execute(req, res, next);
    }

    async getDeliveries(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.getDeliveriesService.execute(req, res, next);
    }
}