import { injectable } from "tsyringe";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";
import { Delivery } from "../models/delivery.model";
import addressSchema from "../schema/address.schema";
import { Address } from "../models/address.model";

@injectable()
export default class AddressRepository {

    constructor(){
    }

    async addAddress(payload: Address){
        const User = await createData(addressSchema, payload);
        return User;
    }

    async getAddresss(payload: any): Promise<any[]>{
        const Users = await readData(addressSchema, payload);
        return Users;
    }

    async getAddress(payload: any): Promise<any> {
        const User = await readsingleData(addressSchema, payload);
        return User;
    }

    async updateAddress(keyword: any, data: any){
        const User = await updateData(addressSchema, keyword, data);
        return User;
    }

    async deleteAddress(id: string){
        const User = await deleteData(addressSchema, {_id: id});
        return User;
    }

}