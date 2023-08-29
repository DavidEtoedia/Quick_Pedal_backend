import { Application } from "express"
import { connect } from "../utils";

export default class Server {

    app: Application;

    constructor(app: Application){
        this.app = app;
      
        
    }

    async start(){
        try{
  
            //connecting to mongodb
            await connect();
            
            this.app.listen(process.env.PORT, () => {
                console.log('Server is listening');
            })
          }catch(error){
        
            console.log(error)
        
        }
    }
}