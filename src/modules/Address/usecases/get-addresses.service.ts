import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../common/utils";
import { IService } from "../../../common/interfaces";
import UserRepository from "../../../common/database/repository/user.repository";
import AddressRepository from "../../../common/database/repository/address.repository";


@injectable()
export default class GetAddressesService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private addressRepository: AddressRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { user } = req.body;

            const userData = await this.addressRepository.getAddresss({user: user.id})

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "successfully fetched addresses",
                data: userData
            });
        }catch(err: any){
            next()
        }
    }
}