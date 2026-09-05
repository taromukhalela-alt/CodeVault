/*
 * ERROR TYPE DEFINITIONS
 * Purpose: Defines custom error types and error messages for consistent error handling
 * Connected To: errors/AppError.js (used with AppError class), controllers and services
 * Used By: Throughout application for throwing specific error types
 * Exports: Error type constants and messages (ValidationError, NotFoundError, UnauthorizedError, etc.)
 */

import AppError from './AppError.js';

export class BadRequestError extends AppError {
    constructor(message = 'Bad request') {
        super(message, 400);
    }
}

export class ValidationError extends AppError {
    constructor(message = 'Validation failed') {
        super(message, 400);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = 'Authentication required') {
        super(message, 401);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = 'You do not have permission to perform this action') {
        super(message, 403);
    }
}

export class NotFoundError extends AppError {
    constructor(message = 'Resource not found') {
        super(message, 404);
    }
}

export class ConflictError extends AppError {
    constructor(message = 'Resource already exists') {
        super(message, 409);
    }
}