import { injectable } from "tsyringe";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";
import { Delivery } from "../models/delivery.model";
import addressSchema from "../schema/address.schema";
import Transaction from "../models/transaction.model";
import transactionSchema from "../schema/transaction.schema";

@injectable()
export default class TransactionRepository {

    constructor(){
    }

    async addTransaction(payload: Transaction){
        const User = await createData(transactionSchema, payload);
        return User;
    }

    async getTransactions(payload: any): Promise<any[]>{
        const Users = await readData(transactionSchema, payload);
        return Users;
    }

    async getTransaction(payload: any): Promise<any> {
        const User = await readsingleData(transactionSchema, payload);
        return User;
    }

    async updateTransaction(keyword: any, data: any){
        const User = await updateData(transactionSchema, keyword, data);
        return User;
    }

    async deleteTransaction(id: string){
        const User = await deleteData(transactionSchema, {_id: id});
        return User;
    }

}