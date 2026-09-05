/*
 * CUSTOM APPLICATION ERROR CLASS
 * Purpose: Custom error class for consistent error handling throughout the application
 * Connected To: middleware/errorHandler.js (catches and processes AppError instances), all controllers
 * Used By: Controllers and services to throw structured errors
 * Usage: throw new AppError('Error message', httpStatusCode)
 */
