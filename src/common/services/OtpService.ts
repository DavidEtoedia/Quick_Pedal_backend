import { injectable } from "tsyringe";
import EmailService from "../utils/EmailService";
import { generateOtp } from "../utils/generateOtp.util";
import { compareHash, hash } from "../utils";
import { ISendEmail } from "./dto/send-email";
import { iVerifyOtp } from "./dto/verify-top";
import UserRepository from "../database/repository/user.repository";
import SendchampHelper from "../helper/sendchamp.helper";

@injectable()
export default class OtpService {
    constructor(
        private emailService: EmailService,
        private sendchampHelper: SendchampHelper,
        private userRepository: UserRepository
    ){}

    async sendOtp(subject: string, email: string, id:string){
        const generatedOtp = generateOtp();
      
        const createOtpToken = await hash(generatedOtp.toString());

        const user = await this.userRepository.updateUser({_id: id}, { otp_reference: createOtpToken});

        await this.sendchampHelper.sendEmail({
            subject,
            toEmail: email,
            toName: `${user.firstname} ${user.lastname}`,
            message: `${generatedOtp}`
        });

        return {
            otp: generatedOtp,
            user
        }
    }

    async verifyOtp(args: iVerifyOtp): Promise<boolean> {

        const userDetails = await this.userRepository.getUser({_id: args.id});
        
        const otp_reference = userDetails.otp_reference;
        
        if(!otp_reference){
            throw new Error("seems otp has expired")
        }

        const isTokenVerified = compareHash(args.otp.toString(), otp_reference);

        if(!isTokenVerified){
            throw new Error("wrong otp provided")
        }

        const user = await this.userRepository.updateUser({_id: args.id}, { otp_reference: null});

        return user;

    }
}