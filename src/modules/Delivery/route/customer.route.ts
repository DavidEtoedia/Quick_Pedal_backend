import "reflect-metadata";
import { NextFunction, Response, Request, Router } from "express";
import { container } from 'tsyringe';
import CustomerDeliveryController from "../controller/customer_delivery.controller";
import userAuth from "../../../common/middlewares/AuthMiddleware";
import TransactionRepository from "../../../common/database/repository/transaction.repository";

const customerDeliveryRouter = Router();
const controller = container.resolve(CustomerDeliveryController);
const transactionRepository = container.resolve(TransactionRepository)
customerDeliveryRouter.get('/get-deliveries', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.getDeliveries(req, res, next));
customerDeliveryRouter.post('/create-delivery', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.createDelivery(req, res, next));
customerDeliveryRouter.post('/schedule-delivery', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.scheduleDelivery(req, res, next));
customerDeliveryRouter.post("/payment/webhook", async function(req: Request, res: Response, next: NextFunction) {
    // Retrieve the request's body
    const event = req.body;

    if(event.event === "charge.success") {
        await transactionRepository.updateTransaction({ref: event.data.reference}, {
            status: "SUCCESS"
        });
    }
    // Do something with event
    res.send(200);
});
export default customerDeliveryRouter;