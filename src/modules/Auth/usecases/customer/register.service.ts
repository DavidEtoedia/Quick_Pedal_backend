import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from 'express';
import { User } from "../../../../common/database/models/user.model";
import { Http, generateToken, hash } from "../../../../common/utils";
import { ErrorService } from "../../../../common/services";
import UserRepository from "../../../../common/database/repository/user.repository";
import { Role } from "../../../../common/constants/role";


@injectable()
export default class RegisterService{
    constructor(
      private userRepository: UserRepository,
      private errorService: ErrorService,
      private httpService: Http,
    ){

    }

    async execute(req: Request, res: Response, next: NextFunction): Promise<void>{
      try {
        const { email, phone, password, firstname, lastname, gender} = req.body;
        console.log(req.body)
        //check if user email exists
        const user = await this.userRepository.getUser({ email });
    
        //if user email exists
        if (user) {
          await this.errorService.emailAlreadyExist({
            providedEmail: email,
            matchedUser: user
         })
        }
    
        //check if user phone exists
        const userphone = await this.userRepository.getUser({ phone });
    
        //if user phone exists
        if (userphone !== null) {
          await this.errorService.phoneAlreadyExist({
            providedPhone: phone,
            matchedPhone: userphone
          })
        }
    
        //encrypt password
        const encryptpassword = await hash(password);
    
        //register user
        const userdata: User = {
          firstname: firstname.toLowerCase(),
          lastname: lastname.toLowerCase(),
          password: encryptpassword,
          email: email.toLowerCase(),
          phone,
          role: Role.CUSTOMER,
          gender,
        };
    
        const createUserAccount = await this.userRepository.addUser(userdata);

        const userdetails = {
          username: createUserAccount.firstname,
          id: createUserAccount._id,
          email: createUserAccount.email
        }

        const generatedToken = await generateToken(userdetails, `${process.env.SECRET}`);
            
        const responseData = {
            token: generatedToken,
            user: userdetails
        }
       
        this.httpService.Response({
          res,
          status: "success",
          message: "Account successfully created",
          data: responseData
        })
      } catch(err: any){
        next(err)
      }
    }
}