/*
 * AUTHENTICATION VALIDATION SCHEMAS
 * Purpose: Validation schemas for authentication endpoints (login, register, etc.)
 * Connected To: middleware/validation.js (used to validate requests), routes/auth.js (applied to auth endpoints)
 * Used By: Validation middleware to check incoming auth request data
 * Exports: Validation schemas for login, register, password reset, etc.
 */

import Joi from 'joi';

export const registerSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});