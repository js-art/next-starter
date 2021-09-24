class ErrorHandler extends Error {
  constructor(message, statusCode, arrayErrors = undefined) {
    super(message);
    this.statusCode = statusCode;
    this.arrayErrors = arrayErrors;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default ErrorHandler;
