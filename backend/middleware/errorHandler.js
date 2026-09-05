/*
 * ERROR HANDLING MIDDLEWARE
 * Purpose: Centralized error handling for all Express errors
 * Connected To: server.js (registered as final middleware), errors/AppError.js (handles custom errors)
 * Used By: Express app to catch and format all errors consistently
 * Process: Catches errors, formats response, sends appropriate HTTP status codes
 */