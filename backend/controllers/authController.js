/*
 * AUTHENTICATION CONTROLLER
 * Purpose: Handles business logic for authentication operations (login, register, token management)
 * Connected To: routes/auth.js (called by route handlers), services/authService.js (delegates to service layer),
 *               models/User.js (interacts with user data), middleware/auth.js (validates tokens)
 * Used By: Auth routes for processing user authentication
 * Functions: login(), register(), logout(), refreshToken(), etc.
 */

import { loginUser, registerUser, logoutUser, deleteUser } from '../services/authService.js';
import { formatError, formatResponse, refreshTokenUtil } from '../utils/index.js';

export async function register(req, res) {
    try {
        const { email, password, username } = req.body;
        const user = await registerUser(username, email, password);
        
        return res.status(201).json(formatResponse(user, 'User registered successfully'));
    } catch (error) {
        return res.status(400).json(formatError(error, 'Registration failed'));
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        return res.status(200).json(formatResponse(user, 'Login successful'));
    } catch (error) {
        return res.status(401).json(formatError(error, 'Login failed'));
    }
}

export async function logout(req, res) {
    try {
        const loggedOut = await logoutUser();
        return res.status(200).json(formatResponse(loggedOut, 'Logout successful'));
    } catch (error) {
        return res.status(400).json(formatError(error, 'Logout failed'));
    }
}

export async function deleteUser(req, res) {
    try {
        const { userId } = req.params.id;
        const deletedUser = await deleteUserService(userId);
        return res.status(200).json(formatResponse(deletedUser, 'User deleted successfully'));
    } catch (error) {
        return res.status(400).json(formatError(error, 'Failed to delete user'));
    }
}

export async function refreshToken(req, res) {
    try {
        const { token, secret, expiresIn } = req.body;
        const newToken = await refreshTokenUtil(token, secret, expiresIn);
        return res.status(200).json(formatResponse({
             token: newToken 
            }, 'Token refreshed successfully'));
    } catch (error) {
        return res.status(400).json(formatError(error, 'Failed to refresh token'));
    }
}
