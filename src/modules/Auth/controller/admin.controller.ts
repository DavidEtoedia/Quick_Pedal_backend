import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from 'express';
import { CustomerAuth } from "../interfaces";
import { ChangepasswordService, ForgotpasswordService, LoginService, RegisterService } from "../usecases/customer";
import VerifyOtpService from "../usecases/verify-otp.service";

@injectable()
export default class AdminauthController implements CustomerAuth<Request, Response, NextFunction> {
    constructor(
        private loginService: LoginService,
        private registerService: RegisterService,
        private forgotPasswordService: ForgotpasswordService,
        private changePasswordService: ChangepasswordService,
        private verifyOtpService: VerifyOtpService
    ){}

    async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.forgotPasswordService.execute(req, res, next);
    }

    async changePassword(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.changePasswordService.execute(req, res, next);
    }

    async login(req: Request, res: Response, next: NextFunction): Promise<void>{
        await this.loginService.execute(req, res, next);
    }

    async register(req: Request, res: Response, next: NextFunction): Promise<void>{
        await this.registerService.execute(req, res, next);
    }

    async verifyOtp(req: Request, res: Response, next: NextFunction): Promise<void>{
        await this.verifyOtpService.execute(req, res, next);
    }
}