/*
 * AUTHENTICATION ROUTES
 * Purpose: Defines authentication endpoints (login, register, logout, refresh token)
 * Connected To: controllers/authController.js (calls controller methods), middleware/auth.js (uses authentication checks)
 * Used By: server.js (registered as /auth routes)
 * Endpoints: POST /auth/login, POST /auth/register, POST /auth/logout, etc.
 */

import express from 'express';
import { register, login, logout, refreshToken } from '../controllers/authController.js';
import { validate } from '../middleware/validation.js';
import { registerSchema, loginSchema } from '../validators/authValidator.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/logout', logout);
router.post('/refresh-token', refreshToken);

export default router;