import { Base } from "./base.model";

export default interface Transaction extends Base {
    ref?: string;
    delivery?: string;
    status?: string;
}