import { injectable } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import GetAddressesService from "../usecases/get-addresses.service";
import UpdateAddressService from "../usecases/update-address.service";
import CreateAddressService from "../usecases/create-address.service";
import DeleteAddressService from "../usecases/delete-address.service";
import GetAddressService from "../usecases/get-address.service";

@injectable()
export default class CustomerAddressController {
    constructor(
        private getAddressService: GetAddressService,
        private getAddressesService: GetAddressesService,
        private deleteAddressService: DeleteAddressService,
        private updateAddressService: UpdateAddressService,
        private createAddressService: CreateAddressService
    ){

    }

    async getAddress(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.getAddressService.execute(req, res, next);
    }

    async getAddresses(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.getAddressesService.execute(req, res, next);
    }

    async deleteAddress(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.deleteAddressService.execute(req, res, next);
    }

    async updateAddress(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.updateAddressService.execute(req, res, next);
    }

    async createAddress(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.createAddressService.execute(req, res, next);
    }

}