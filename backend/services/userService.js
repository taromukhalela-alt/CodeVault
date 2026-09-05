/*
 * USER SERVICE
 * Purpose: Business logic layer for user operations (CRUD, profile management)
 * Connected To: controllers/userController.js (called by controller), models/User.js (database operations)
 * Used By: User controller for performing user-related operations
 * Functions: getUsers(), getUserById(), createUser(), updateUser(), deleteUser(), etc.
 */
import { User } from '../models/index.js'

export async function getUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Users not found');
    }
}

export async function getUserByIdService(userId) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error('User not found');
    }
}

export async function updateUserProfile(userId, updateData) {
    try {
        const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Failed to update user profile');
    }
}

export async function getUserProjectsService(userId) {
    try {
        const user = await User.findById(userId).populate('projects');
        if (!user) {
            throw new Error('User not found');
        }

        return user.projects;
    } catch (error) {
        throw new Error('Failed to retrieve user projects');
    }
}



