/*
 * MODEL AGGREGATOR
 * Purpose: Central export file for all database models
 * Connected To: All models in this directory, services/userService.js, services/authService.js
 * Used By: Services and controllers that need to import multiple models
 * Returns: Object containing all exported models
 */

export { default as User } from './User.js';
export { default as Project } from './Project.js';
