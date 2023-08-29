import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../common/utils";
import { IService } from "../../../common/interfaces";
import OtpService from "../../../common/services/OtpService";
import { iVerifyOtp } from "../../../common/services/dto/verify-top";
import UserRepository from "../../../common/database/repository/user.repository";


@injectable()
export default class VerifyOtpService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private otpService: OtpService,
        private userRepository: UserRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { id, otp } = req.body;

            const verifyPayload: iVerifyOtp = {
                id,
                otp
            };
        
            const data = await this.otpService.verifyOtp(verifyPayload);

            await this.userRepository.updateUser({_id: id},{
                is_email_verified: true
            })

            this.httpHttp.Response({
                res,
                status: "success",
                message: "otp successfully verified",
                data
            });
        }catch(err: any){
            next()
        }
    }
}