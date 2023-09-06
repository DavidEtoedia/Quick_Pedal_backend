import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http, compareHash, generateToken } from "../../../../common/utils";
import { ErrorService } from "../../../../common/services";
import UserRepository from "../../../../common/database/repository/user.repository";
import { IService } from "../../../../common/interfaces";
import { NotFoundError } from "../../../../common/errors/notfound.error";


@injectable()
export default class LoginService implements IService<Request, Response, NextFunction>{
    constructor(
        private userRepository: UserRepository,
        private errorService: ErrorService,
        private httpService: Http
    ){}

    async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email, password } = req.body;

            // Check if user exists
            const user = await this.userRepository.getUser({ email: email.toLowerCase() });

            if (!user) {
                throw new NotFoundError('User email not found');
            }

            // check password 
            const checkpassword = await compareHash(password, user.password)
        
            if(!checkpassword){
                throw new NotFoundError('User password is wrong');
            }

            const userdetails = {
                username: user.firstname,
                id: user._id,
                email: user.email
            }

            const generatedToken = await generateToken(userdetails, `${process.env.SECRET}`);
            
            const responseData = {
                token: generatedToken,
                user: {
                    firstname: user.firstname,
                    id: user._id,
                    email: user.email,
                    role: user.role
                }
            }

            this.httpService.Response({
                res,
                status: "success",
                message: "Account Authorized",
                data: responseData
            })
        } catch(err: any){
            next(err);
        }
    }
}