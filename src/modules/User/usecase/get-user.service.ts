import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../common/utils";
import { IService } from "../../../common/interfaces";
import UserRepository from "../../../common/database/repository/user.repository";


@injectable()
export default class GetUserService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private userRepository: UserRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { user } = req.body;

            const userData = await this.userRepository.getUser({_id: user.id})

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "user successfully fetched",
                data: userData
            });
        }catch(err: any){
            next()
        }
    }
}