import { injectable } from "tsyringe";

@injectable()
export default class ErrorService {
    
    constructor() {}

    captureError(error: Error, meta?: Record<string, unknown>) {
    }

    emailAlreadyExist(meta?: any): void {
        const error = new Error('Email already exist');
        this.captureError(error)
        throw error
    }

    phoneAlreadyExist(meta?: any): void {
        const error = new Error('Phone already exist');
        this.captureError(error)
        throw error
    }

    emailNotFound(meta?: any): any {
        const error = new Error('Email not found');
        this.captureError(error)
        throw error
        return
    }

    wrongPassword(meta?: any): void {
        const error = new Error('Incorrect password');
        this.captureError(error)
        throw error
    }
    
    userNotAuthorized(meta: Record<string, unknown>): void {
        const error = new Error('Sorry this account is not authorized');
        this.captureError(error, meta)
        throw error
    }
    
}