import { injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';
import { Http } from '../../../../../common/utils';
import { IService } from '../../../../../common/interfaces';
import UserRepository from '../../../../../common/database/repository/user.repository';
import OtpService from '../../../../../common/services/OtpService';
import { NotFoundError } from '../../../../../common/errors/notfound.error';

export interface IForgotpassword {
  email: string;
  url: string;
}

@injectable()
export default class ForgotpasswordService implements IService<Request, Response, NextFunction> {
  constructor(
    private userRepository: UserRepository,
    private otpService: OtpService,
    private http: Http
  ) {}

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email } = req.body;

      //check if user exist using email
      const user = await this.userRepository.getUser({ email: email });

      if (!user) {
        throw new NotFoundError('User email not found');
      }

      const otp = await this.otpService.sendOtp('Forgotpassword OTP', email, user._id);

      // simple schedular to clear token after 10m
      const WAIT_PERIOD = 600000; // time in milliseconds

      setTimeout(()=> {
        this.userRepository.updateUser({email}, {
          otp_reference: '',
        })
      }, WAIT_PERIOD);

      
      this.http.Response({
        res,
        status: "success",
        message: "Check email for password reset link",
        data: otp
      });
    } catch(err: any) {
      next(err)
    }
  }
}
