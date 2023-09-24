import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../common/utils";
import { IService } from "../../../common/interfaces";
import UserRepository from "../../../common/database/repository/user.repository";
import { AccountStatus } from "../../../common/constants/account_status";


@injectable()
export default class DeactivateAccountService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private userRepository: UserRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { user } = req.body;

            const userData = await this.userRepository.updateUser({_id: user.id},{
                account_state: AccountStatus.DEACTIVATED
            })

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "user account successfully deactivated",
                data: userData
            });
        }catch(err: any){
            next(err)
        }
    }
}