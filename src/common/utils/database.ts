import mongoose from 'mongoose';
import "reflect-metadata";
import { DatabaseError } from '../errors/database.error';
require('dotenv').config();

const connect = async () => {
    mongoose.connect(`${process.env.STAGING_MONGODB_URL}`).then((res: any) => {
      console.log("Database connected")
    }).catch((err: any)=> {
      throw new DatabaseError()
    })
}

const createData =  (model: any, data: any) => {

  try{

    return model.create(data);

  }catch(err){

    return err

  }

}

const readData = (model: any, data: any, select?: any) => {
  try{

    return model.find(data, select).sort({ created_at: -1 });

  }catch(err: any){

    return err.message;

  }
}

const readsingleData = (model: any, data: any, select?: any) => {
  try{

    return model.findOne(data, select)

  }catch(err: any){

    return err.message;

  }
}

const updateData = (model: any, keyword: any, data: any) => {
  try{

    return model.findByIdAndUpdate(keyword, data)

  }catch(err: any){
    return err.message
  }
}

const deleteData = (model: any, keyword: any) => {
  try{

    return model.findByIdAndRemove(keyword)

  }catch(err: any){
    
      return err.message
    
  }
}

export {
  connect,
  createData,
  readData,
  readsingleData,
  updateData,
  deleteData
}