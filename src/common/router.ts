import { Application } from 'express';
import authRouter from '../modules/Auth/routes/customer.route';
import { Router } from "express";
import customerAddressRouter from '../modules/Address/routes/customer.routes';
import customerDeliveryRouter from '../modules/Delivery/route/customer.route';
import customerUserRouter from '../modules/User/routes/cutomer.routes';
import customerAuthRouter from '../modules/Auth/routes/customer.route';
import { adminAuthRouter } from '../modules/Auth/routes';
import { adminDeliveryRouter } from '../modules/Delivery/route/admin.route';


export const router = Router({});
router.get('/', async (_req, res, _next) => {

    let healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
        res.status(200)
    } catch (error: any) {
        res.send(error.message)
        res.status(503).send();
    }
});


export const BASE_URL = "/api/v1";
export const ADMIN_BASE_URL = `${BASE_URL}/admin`;
export const AGENT_BASE_URL = `${BASE_URL}/agent`;

export default function moduleRouters(app: Application): void {
  app.use('/health_check', router)

  /** CUSTOMER ROUTES */
  app.use(`${BASE_URL}/auth`, customerAuthRouter);
  app.use(`${BASE_URL}/delivery`, customerDeliveryRouter);
  app.use(`${BASE_URL}/address`, customerAddressRouter);
  app.use(`${BASE_URL}/user`, customerUserRouter);

  /** ADMIN ROUTES */
  app.use(`${ADMIN_BASE_URL}/auth`, adminAuthRouter);
  app.use(`${ADMIN_BASE_URL}/delivery`, adminDeliveryRouter);
  app.use(`${ADMIN_BASE_URL}/user`, customerUserRouter);
  
//   /** AGENT ROUTES */
//   app.use(`${AGENT_BASE_URL}/auth`, agentAuthRouter);

}
