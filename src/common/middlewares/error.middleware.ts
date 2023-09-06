import { NextFunction, Response, Request } from "express";
import { CustomError } from "../errors/custom.error";

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
   
    if (err instanceof CustomError) {
        console.log('Err: ' + err.serializeErrors())
        return res.status(err.statusCode).json({message: err.message});
    }
    
    res.status(500).send({
        errors: [{ message: 'Something went wrong' }]
    });
}