/*
 * AUTHENTICATION SERVICE
 * Purpose: Business logic layer for authentication (token generation, password hashing, token validation)
 * Connected To: controllers/authController.js (called by controller), models/User.js (database operations),
 *               utils/jwt.js (token operations), utils/password.js (password hashing)
 * Used By: Auth controller for performing authentication operations
 * Functions: authenticateUser(), generateToken(), validateToken(), hashPassword(), etc.
 */
import { User } from '../models/index.js';
import { comparePassword, hashPassword } from '../utils/index.js';

export async function registerUser(username, email, password) {
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error('User already exists with this email');
        }

        const hashedPassword = await hashPassword(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        return {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        };
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;                                                
    }
}

export async function loginUser(email, password) {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return {
            id: user._id,
            username: user.username,
            email: user.email,
        };
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

export async function deleteUserService(userId) {
    try {
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            throw new Error('User not found');
        }

        return {
            message: 'User deleted successfully',
            id: userId,
        };
    } catch (error) {
        throw error;
    }
}

export function logoutUser() {
    return {
        message: 'User logged out successfully',
    };
}