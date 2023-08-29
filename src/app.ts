import "reflect-metadata";
require('dotenv').config();
import express, {Application, NextFunction, Request, Response} from 'express';
import moduleRouters from './common/router';
import AWS from "aws-sdk";
import fileupload from "express-fileupload";
import { errorMiddleware } from "./common/middlewares/error.middleware";

const app: Application = express();

// Initializing aws credentials 
const ACCESSKEYID = process.env.ACCESSKEYID || "";
const SECRETACCESSKEY = process.env.SECRETACCESSKEY || "";
const AWSREGION = process.env.AWS_SES_EMAIL || "";

AWS.config.credentials = new AWS.Credentials({accessKeyId: ACCESSKEYID, secretAccessKey: SECRETACCESSKEY});

// Middlewares
app.use(express.json());
app.use(errorMiddleware);
app.use(fileupload)
// app.use(fileupload());
app.use(express.urlencoded({extended: true}));
app.use((req: Request , res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



export default app;

