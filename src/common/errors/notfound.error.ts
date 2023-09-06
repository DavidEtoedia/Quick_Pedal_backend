import { CustomError } from "./custom.error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  message = "";
  constructor(message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ 
      status: "error",
      statusCode: this.statusCode,
      message: this.message 
    }];
  }
}
