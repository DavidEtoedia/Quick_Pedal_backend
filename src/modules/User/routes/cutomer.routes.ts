import "reflect-metadata";
import { NextFunction, Response, Request, Router } from "express";
import { container } from 'tsyringe';
import CustomerUserController from "../controller/customer.controller";
import userAuth from "../../../common/middlewares/AuthMiddleware";


const customerUserRouter = Router();
const controller = container.resolve(CustomerUserController);

customerUserRouter.get('/get-user', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.getUser(req, res, next));
customerUserRouter.patch('/changepassword', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.changePassword(req, res, next));
customerUserRouter.patch('/edit-profile', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.updateUser(req, res, next));
customerUserRouter.patch('/deactivate-account', userAuth, (req: Request, res: Response, next: NextFunction)=>controller.deactivateAccount(req, res, next));
export default customerUserRouter;