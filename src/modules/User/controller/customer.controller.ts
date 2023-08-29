import { injectable } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import GetUserService from "../usecase/get-user.service";
import UpdateUserService from "../usecase/update-user.service";
import ChangePasswordService from "../usecase/change-password.service";
import DeactivateAccountService from "../usecase/deactivate-account.service";

@injectable()
export default class CustomerUserController {
    constructor(
        private getUserService: GetUserService,
        private updateUserService: UpdateUserService,
        private changePasswordService: ChangePasswordService,
        private deactivateAccountService: DeactivateAccountService
    ){

    }

    async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.getUserService.execute(req, res, next);
    }

    async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.updateUserService.execute(req, res, next);
    }

    async changePassword(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.changePasswordService.execute(req, res, next);
    }

    async deactivateAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.deactivateAccountService.execute(req, res, next);
    }

}