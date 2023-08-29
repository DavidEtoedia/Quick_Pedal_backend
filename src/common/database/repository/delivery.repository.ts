import { injectable } from "tsyringe";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

import deliverySchema from "../schema/delivery.schema";
import { Delivery } from "../models/delivery.model";

@injectable()
export default class DeliveryRepository {

    constructor(){
    }

    async addDelivery(payload: Delivery){
        const User = await createData(deliverySchema, payload);
        return User;
    }

    async getDeliverys(payload: any): Promise<any[]>{
        const Users = await readData(deliverySchema, payload);
        return Users;
    }

    async getDelivery(payload: any): Promise<any> {
        const User = await readsingleData(deliverySchema, payload);
        return User;
    }

    async updateDelivery(keyword: any, data: any){
        const User = await updateData(deliverySchema, keyword, data);
        return User;
    }

    async deleteDelivery(id: string){
        const User = await deleteData(deliverySchema, {_id: id});
        return User;
    }

}