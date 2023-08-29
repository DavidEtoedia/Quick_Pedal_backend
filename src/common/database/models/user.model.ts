import { Base } from "./base.model";

export interface User extends Base {
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    gender?: string;
    phone?: number;
    is_email_verified?: boolean;
    account_status?: string;
    otp_reference?: string;
    role?: string;
}