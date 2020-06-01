export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(errorMessage: string);
    abstract serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
