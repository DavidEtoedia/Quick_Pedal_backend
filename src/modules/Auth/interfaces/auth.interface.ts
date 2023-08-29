export default interface Auth<Request, Response, NextFunction> {
    login(req: Request, res: Response, next: NextFunction) : Promise<void>;
}

export interface CustomerAuth<Request, Response, NextFunction> extends Auth<Request, Response, NextFunction> {
    register(req: Request, res: Response, next: NextFunction) : Promise<void>;
    changePassword(req: Request, res: Response, next: NextFunction): Promise<void>;
    forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void>;
}