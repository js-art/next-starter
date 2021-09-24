import ErrorHandler from "@/ut/errorHandler";
const Errors = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;
  // Wrong Mongoose Object Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid:${err.path}`;
    error = new ErrorHandler(message, 404);
  }
  //handling mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 404, message);
  }
  res.status(err.statusCode).json({
    success: false,
    message: error.message,
    error: process.env.DEV_MODE == "true" ? error : undefined,
    stack: process.env.DEV_MODE == "true" ? err.stack : undefined,
  });
};
export default Errors;
