import "reflect-metadata";
import { NextFunction, Response, Request, Router } from "express";
import { container } from 'tsyringe';
import CustomerUserController from "../controller/customer.controller";
import userAuth from "../../../common/middlewares/AuthMiddleware";


const customerAddressRouter = Router();
const controller = container.resolve(CustomerUserController);

customerAddressRouter.get('/:id', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.getAddress(req, res, next));
customerAddressRouter.get('/', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.getAddresses(req, res, next));
customerAddressRouter.post('/create', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.createAddress(req, res, next));
customerAddressRouter.patch('/:id', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.updateAddress(req, res, next));
customerAddressRouter.delete('/:id', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.deleteAddress(req, res, next));

export default customerAddressRouter;