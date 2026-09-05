/*
 * USER VALIDATION SCHEMAS
 * Purpose: Validation schemas for user endpoints (create, update, profile management)
 * Connected To: middleware/validation.js (used to validate requests), routes/users.js (applied to user endpoints)
 * Used By: Validation middleware to check incoming user request data
 * Exports: Validation schemas for creating users, updating profiles, etc.
 */

import Joi from 'joi';

export const updateCreateUser = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
}).min(1);

export const userIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
});