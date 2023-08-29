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

            const PORT = process.env.PORT || 5000
            
            this.app.listen(PORT, () => {
                console.log('Server is listening ' + PORT);
            })
          }catch(error){
        
            console.log(error)
        
        }
    }
}