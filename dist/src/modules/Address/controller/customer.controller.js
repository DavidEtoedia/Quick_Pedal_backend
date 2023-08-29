"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const get_addresses_service_1 = __importDefault(require("../usecases/get-addresses.service"));
const update_address_service_1 = __importDefault(require("../usecases/update-address.service"));
const create_address_service_1 = __importDefault(require("../usecases/create-address.service"));
const delete_address_service_1 = __importDefault(require("../usecases/delete-address.service"));
const get_address_service_1 = __importDefault(require("../usecases/get-address.service"));
let CustomerAddressController = class CustomerAddressController {
    constructor(getAddressService, getAddressesService, deleteAddressService, updateAddressService, createAddressService) {
        this.getAddressService = getAddressService;
        this.getAddressesService = getAddressesService;
        this.deleteAddressService = deleteAddressService;
        this.updateAddressService = updateAddressService;
        this.createAddressService = createAddressService;
    }
    getAddress(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddressService.execute(req, res, next);
        });
    }
    getAddresses(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddressesService.execute(req, res, next);
        });
    }
    deleteAddress(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteAddressService.execute(req, res, next);
        });
    }
    updateAddress(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateAddressService.execute(req, res, next);
        });
    }
    createAddress(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createAddressService.execute(req, res, next);
        });
    }
};
CustomerAddressController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [get_address_service_1.default,
        get_addresses_service_1.default,
        delete_address_service_1.default,
        update_address_service_1.default,
        create_address_service_1.default])
], CustomerAddressController);
exports.default = CustomerAddressController;
//# sourceMappingURL=customer.controller.js.map