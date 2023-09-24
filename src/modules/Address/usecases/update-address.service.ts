import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { Http } from "../../../common/utils";
import { IService } from "../../../common/interfaces";
import UserRepository from "../../../common/database/repository/user.repository";
import AddressRepository from "../../../common/database/repository/address.repository";


@injectable()
export default class UpdateAddressService implements IService<Request, Response, NextFunction> {
    constructor(
        private httpHttp: Http,
        private addressRepository: AddressRepository
    ){}
    async execute(req: Request, res: Response, next: NextFunction){
        try {

            const { id } = req.params;

            const { name, address } = req.body;

            const userData = await this.addressRepository.updateAddress({_id: id}, {
                name,
                address
            })

            this.httpHttp.Response({  
                res,
                status: "success",
                message: "successfully update address",
                data: userData
            });
        }catch(err: any){
            next(err)
        }
    }
}