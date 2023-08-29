import { Base } from "./base.model";

export interface Delivery extends Base {
    reference?: string;
    sender?: string;
    sender_location?: string;
    recipient_location?: string;
    recipient_phone?: string;
    distance?: string;
    delivery_cost?: number;
    delivery_status?: string;
    delivery_agent?: string;
    delivery_agent_phone?: number;
    schedule_time?: Date;
}