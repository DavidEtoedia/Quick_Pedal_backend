"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class Server {
    constructor(app) {
        this.app = app;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //connecting to mongodb
                yield (0, utils_1.connect)();
                const PORT = process.env.PORT || 5000;
                this.app.listen(PORT, () => {
                    console.log('Server is listening ' + PORT);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map