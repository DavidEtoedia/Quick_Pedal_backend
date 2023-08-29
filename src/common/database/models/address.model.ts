import { Base } from "./base.model";

export interface Address extends Base {
    name?: string;
    address?: string;
    user?: string;
}