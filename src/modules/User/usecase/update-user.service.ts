import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../common/utils";
import { IService } from "../../../common/interfaces";
import UserRepository from "../../../common/database/repository/user.repository";


@injectable()
export default class UpdateUserService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private userRepository: UserRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { user, email, firstname, lastname, phone } = req.body;

            const userData = await this.userRepository.updateUser({_id: user.id}, {
                email,
                phone,
                firstname,
                lastname
            })

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "update user details",
                data: userData
            });
        }catch(err: any){
            next(err)
        }
    }
}