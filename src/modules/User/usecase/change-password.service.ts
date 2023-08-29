import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http, hash } from "../../../common/utils";
import { IService } from "../../../common/interfaces";
import UserRepository from "../../../common/database/repository/user.repository";


@injectable()
export default class ChangePasswordService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private userRepository: UserRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { user, password, oldpassword } = req.body;

            if(oldpassword === password) {
                throw new Error("You cant retain old password")
            }

            const hashedPassword = await hash(password);

            await this.userRepository.updateUser({_id: req.params.id}, {password: hashedPassword});

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "password successfully updated",
            });
        }catch(err: any){
            next()
        }
    }
}