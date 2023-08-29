import "reflect-metadata";
import { NextFunction, Response, Request, Router } from "express";
import { container } from 'tsyringe';
import { CustomerauthController } from "../controller";

const customerAuthRouter = Router();
const controller = container.resolve(CustomerauthController);

customerAuthRouter.post('/login', (req: Request, res: Response, next: NextFunction)=>controller.login(req, res, next));
customerAuthRouter.post('/register', (req: Request, res: Response, next: NextFunction) => controller.register(req, res, next));
customerAuthRouter.post('/forgotpassword', (req: Request, res: Response, next: NextFunction) => controller.forgotPassword(req, res, next));
customerAuthRouter.patch('/changepassword', (req: Request, res: Response, next: NextFunction)=>controller.changePassword(req, res, next));
customerAuthRouter.post('/verify-otp', (req: Request, res: Response, next: NextFunction)=>controller.verifyOtp(req, res, next));

export default customerAuthRouter;