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
const utils_1 = require("../../../../common/utils");
const delivery_repository_1 = __importDefault(require("../../../../common/database/repository/delivery.repository"));
const reference_generator_util_1 = require("../../../../common/utils/reference-generator.util");
const paystack_helper_1 = __importDefault(require("../../../../common/helper/paystack.helper"));
let ScheduleDeliveryService = class ScheduleDeliveryService {
    constructor(httpHttp, deliveryRepository, paystackHelper) {
        this.httpHttp = httpHttp;
        this.deliveryRepository = deliveryRepository;
        this.paystackHelper = paystackHelper;
    }
    execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, sender_location, recipient_location, recipient_phone, delivery_cost, distance, schedule_date } = req.body;
                const reference = (0, reference_generator_util_1.generateReference)();
                const createDelivery = yield this.deliveryRepository.addDelivery({
                    reference,
                    sender: user.id,
                    sender_location,
                    recipient_location,
                    recipient_phone,
                    distance,
                    delivery_cost,
                    schedule_time: schedule_date
                });
                const paymentLink = yield this.paystackHelper.initializeTransaction({
                    amount: delivery_cost.toString(),
                    email: user.email,
                    reference
                });
                this.httpHttp.Response({
                    res,
                    status: "success",
                    message: "order successfully created",
                    data: paymentLink
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
};
ScheduleDeliveryService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [utils_1.Http,
        delivery_repository_1.default,
        paystack_helper_1.default])
], ScheduleDeliveryService);
exports.default = ScheduleDeliveryService;
//# sourceMappingURL=schedule_delivery.service.js.map