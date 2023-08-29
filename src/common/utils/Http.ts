
import { Response } from 'express';
import { injectable } from "tsyringe";

@injectable()
export default class Http {

    constructor(){
    }

    Response({res, statuscode, status, message, data}: ResponseModel) {

        const response: Response =    res.json({
                                status: status,
                                message: message,
                                data: data
                            })
        return response;
    }
}

export interface ResponseModel {
    res: Response,
    statuscode?: number,
    status?: "error" | "success",
    message?: string,
    data?: any
}