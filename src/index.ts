import "reflect-metadata";
import Server from "./common/config/server";
import app from "./app";
import moduleRouters from "./common/router";
require('dotenv').config();

 // Routes
moduleRouters(app)

const server = new Server(app)
server.start()

