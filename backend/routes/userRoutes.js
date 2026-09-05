/*
 * USER ROUTES
 * Purpose: Defines user endpoints (CRUD operations on user resources)
 * Connected To: controllers/userController.js (calls controller methods), middleware/auth.js (protects routes)
 * Used By: server.js (registered as /users routes), Frontend API calls
 * Endpoints: GET /users, POST /users, PUT /users/:id, DELETE /users/:id, etc.
 */

import express from 'express';
import { geAlltUsers, getUserById, updateUserProfile, getUserProjects } from '../controllers/userController.js';
import { validateAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', validateAuth, getAllUsers);
router.get('/:id', validateAuth, getUserById);
router.put('/:id', validateAuth, updateUserProfile);
router.get('/:id/projects', validateAuth, getUserProjects);

export default router;
