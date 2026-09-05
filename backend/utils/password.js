/*
 * PASSWORD UTILITIES
 * Purpose: Password hashing and comparison helper functions
 * Connected To: services/authService.js (uses password operations), models/User.js (password validation)
 * Used By: Authentication workflows for secure password handling
 * Functions: hashPassword(), comparePassword(), generateSecurePassword(), etc.
 */

import bcrypt from 'bcrypt';

export async function hashPassword(password) {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

export async function comparePassword(password, hashedPassword) {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

export function generateSecurePassword(length = 12) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        
        return password;
}