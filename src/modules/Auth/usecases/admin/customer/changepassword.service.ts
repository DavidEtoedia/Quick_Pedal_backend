import { injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';
import { Http, compareHash, hash } from '../../../../../common/utils';
import UserRepository from '../../../../../common/database/repository/user.repository';
import { IService } from '../../../../../common/interfaces';
import { ErrorService } from '../../../../../common/services';


export interface IResetpassword {
  id: string;
  password: string;
}

@injectable()
export default class ChangepasswordService implements IService<Request, Response, NextFunction> {
  constructor(
    private userRepository: UserRepository,
    private errorService: ErrorService,
    private httpService: Http
  ) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const { password, id, otp } = req.body;

      const user = await this.userRepository.getUser({ _id: id });

      const verifyOTP = await compareHash(otp, user.otp_reference);

      if(!verifyOTP){
        throw new Error('Expired OTP')
      }
      
      if(!user) {
        this.errorService.userNotAuthorized({
          user
        })
      }
    
      // update password record
      const hashedPassword = await hash(password);

      await this.userRepository.updateUser({
        _id: id
      },
      {
        password: hashedPassword
      }
      );

  
      this.httpService.Response({
        res,
        status: "success",
        message: "Password successfully updated"
      })
    } catch(err: any) {
      next(err)
    }
  }
}
