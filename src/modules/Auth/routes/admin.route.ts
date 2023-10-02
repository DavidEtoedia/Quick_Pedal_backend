import { Router, Request, Response, NextFunction } from "express";
import { container } from 'tsyringe';
import { AdminauthController } from "../controller";

const adminAuthRouter = Router();
const controller = container.resolve(AdminauthController);

adminAuthRouter.post('/login', (req: Request, res: Response, next: NextFunction)=>controller.login(req, res, next));
adminAuthRouter.post('/register', (req: Request, res: Response, next: NextFunction) => controller.register(req, res, next));
adminAuthRouter.post('/forgotpassword', (req: Request, res: Response, next: NextFunction) => controller.forgotPassword(req, res, next));
adminAuthRouter.patch('/changepassword', (req: Request, res: Response, next: NextFunction)=>controller.changePassword(req, res, next));
adminAuthRouter.post('/verify-otp', (req: Request, res: Response, next: NextFunction)=>controller.verifyOtp(req, res, next));

export default adminAuthRouter;