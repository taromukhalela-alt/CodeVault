/*
 * JWT UTILITIES
 * Purpose: JWT token generation, validation, and decoding helper functions
 * Connected To: services/authService.js (uses token operations), middleware/auth.js (validates tokens)
 * Used By: Authentication and authorization workflows
 * Functions: generateToken(), verifyToken(), decodeToken(), refreshToken(), etc.
 */

import jwt from 'jsonwebtoken';

export async function generateToken(payload, secret, expiresIn) {
    try {
        const token = await jwt.sign(payload, secret, { expiresIn });
        return token;
    } catch (error) {
        throw error;
    }
}

export async function verifyToken(token, secret) {
    try {
        const decoded = await jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        throw error;
    }
}

export async function decodeToken(token) {
    try {
        const decoded = await jwt.decode(token);
        return decoded;
    } catch (error) {
        throw error;
    }
}

export async function refreshTokenUtil(token, secret, expiresIn) {
    try {
        const decoded = await jwt.verify(token, secret, {
            ignoreExpiration: true
        });
        const newToken = await jwt.sign({
            id: decoded.id
        }, secret, {
            expiresIn
        });
        return newToken;
    } catch (error) {
        throw error;
    }
}