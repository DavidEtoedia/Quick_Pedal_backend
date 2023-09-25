import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from 'express';
import { User } from "../../../../common/database/models/user.model";
import { Http, generateToken, hash } from "../../../../common/utils";
import { ErrorService } from "../../../../common/services";
import UserRepository from "../../../../common/database/repository/user.repository";
import { Role } from "../../../../common/constants/role";
import { NotFoundError } from "../../../../common/errors/notfound.error";


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
     
        //check if user email exists
        const user = await this.userRepository.getUser({ email });
       
        //if user email exists
        if (user) {
          throw new NotFoundError('email already exists');
        }
    
        //check if user phone exists
        const userphone = await this.userRepository.getUser({ phone });
        
        //if user phone exists
        if (userphone) {
          throw new NotFoundError('phone number already exists');
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
          gender: gender.toUpperCase(),
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