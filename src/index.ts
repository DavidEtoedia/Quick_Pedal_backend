import "reflect-metadata";
import Server from "./common/config/server";
import app from "./app";
require('dotenv').config();

 
const server = new Server(app)
server.start()

