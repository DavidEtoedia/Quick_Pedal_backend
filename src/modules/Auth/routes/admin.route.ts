import { Router, Request, Response, NextFunction } from "express";
import { container } from 'tsyringe';

const adminAuthRouter = Router();
// const controller = container.resolve(AdminauthController);

// adminAuthRouter.post('/login', (req: Request, res: Response, next: NextFunction)=>controller.login(req, res, next));

export default adminAuthRouter;