import { CustomError } from "./custom.error";

export class DatabaseError extends CustomError {
  statusCode = 400;
  message = "Error connecting to database";
  constructor() {
    super('Error connecting to database');

    Object.setPrototypeOf(this, DatabaseError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
