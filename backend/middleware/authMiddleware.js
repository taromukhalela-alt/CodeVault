/*
 * AUTHENTICATION MIDDLEWARE
 * Purpose: Validates JWT tokens and protects routes requiring authentication
 * Connected To: routes files (applied to protected endpoints), services/authService.js (validates token)
 * Used By: Protected routes in routes/users.js and other secured endpoints
 * Process: Checks Authorization header, validates JWT, attaches user info to request object
 */

import { verifyToken, log, error } from '../utils/index.js';

export async function validateAuth(req, res, next) {
    try {
        const authHeader = req.headers.authorization || '';

        if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                status: 'error',
                message: 'Missing or invalid Authorization header',
            });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                status: 'error',
                message: 'Token not provided',
            });
        }

        const secret = process.env.JWT_SECRET || 'your_default_secret';

        const decoded = await verifyToken(token, secret);

        req.user = decoded;
        log('Authentication successful for user:', decoded);
        next();
    } catch (error) {
        error('Authentication failed:', error);
        return res.status(401).json({
            status: 'error',
            message: 'Invalid or expired token',
        });
    }
}