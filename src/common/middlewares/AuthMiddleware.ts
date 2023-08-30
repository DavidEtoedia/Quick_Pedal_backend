import { NextFunction } from "express";
import { Response, Request } from "express";
import { verifyToken } from "../utils";



export default async function userAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader: string | undefined = req.headers.authorization ;
      console.log(authHeader);
      if(!authHeader || !authHeader.split(' ')[1]){
          res.json({
          status: "error",
          message: 'Not authorized to take this action'
          })
      }
      const SECRET_KEY = process.env.SECRET || "";
      const accesstoken = authHeader && authHeader.split(' ')[1];
      const verify = await verifyToken(accesstoken, `${SECRET_KEY}`);
      console.log(verify)
      if(!verify){
          res.json({
          status: "error",
          message: 'Not authorized to take this action'
          })
      } else {
          req.body.user = verify
      }       

    next()
    }catch(err: any){
        res.json({
            status: "error",
            message: err.message
        })
    }
}