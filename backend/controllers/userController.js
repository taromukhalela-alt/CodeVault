/*
 * USER CONTROLLER
 * Purpose: Handles business logic for user-related operations (CRUD, profile management)
 * Connected To: routes/users.js (called by route handlers), services/userService.js (delegates to service layer),
 *               models/User.js (interacts with user data)
 * Used By: User routes for processing user requests
 * Functions: getUsers(), getUserById(), createUser(), updateUser(), deleteUser(), etc.
 */

import { formatError, formatResponse, log, error } from '../utils/index.js';
import { getUsers, getUserByIdService, updateUserProfile, getUserProjectsService } from '../services/userService.js';

export async function getAllUsers(req, res, next) {
    try {
        const users = await getUsers();

        log(`Retrieved all users: ${users}`)
        return res.status(200).json(
            formatResponse(users, "Successfully fetched users")
        );
    } catch (caughtError) {

        error(`Error fetching them users.`);
        return res.status(500).json(
            formatError(caughtError, "Failed to fetch users")
        );
    }
}

export async function getUserById(req, res, next) {
    try {
        const userId = req.params.id;
        const user = await getUserByIdService(userId);

        log(`Successfully retrieved user with id: ${userId}`);
        return res.status(200).json(
            formatResponse(user, "Successfully fetched user")
        );
    } catch (caughtError) {

        error(`Error fetching user.`);
        return res.status(404).json(
            formatError(caughtError, "User not found")
        );
    }
}

export async function updateUser(req, res, next) {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await updateUserProfile(userId, updateData);


        log(`Successfully updated user with id: ${userId}`);
        return res.status(200).json(
            formatResponse(updatedUser, "Successfully updated user")
        );
    } catch (caughtError) {

        error(`Error updating user.`)
        return res.status(404).json(
            formatError(error, "User not found")
        );
    }
}

export async function getUserProjects(req, res, next) {
    try {
        const userId = req.params.id;
        const projects = await getUserProjectsService(userId);

        return res.status(200).json(
            formatResponse(projects, "Successfully fetched user projects")
        );
    } catch (error) {
        return res.status(404).json(
            formatError(error, "User not found.")
        );
    }
}
