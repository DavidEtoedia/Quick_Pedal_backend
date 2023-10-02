import { Router, Request, Response, NextFunction } from "express";
import AdminDeliveryController from "../controller/admin_delivery.controller";
import { container } from "tsyringe";
import userAuth from "../../../common/middlewares/AuthMiddleware";

const adminDeliveryRouter = Router();
const controller = container.resolve(AdminDeliveryController);

adminDeliveryRouter.get('/', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.getDeliveries(req, res, next));
adminDeliveryRouter.get('/:id', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.getDelivery(req, res, next));
adminDeliveryRouter.patch('/:id', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.updateDelivery(req, res, next));
adminDeliveryRouter.delete('/:id', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.deleteDelivery(req, res, next));
adminDeliveryRouter.patch('/assign-agent', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.assignAgent(req, res, next));

export {
    adminDeliveryRouter
}