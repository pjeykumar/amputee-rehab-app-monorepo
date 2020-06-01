import { CustomError } from "./custom-error";
export declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    private reason;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
