/*
 * USER MODEL
 * Purpose: Defines User schema and database model for MongoDB (using Mongoose)
 * Connected To: database/schemas/User.js (schema definition), services/userService.js (queries database)
 * Used By: Controllers and services that need to interact with user collection
 * Methods: Schema validations, virtual fields, pre/post hooks for data manipulation
 */

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,   
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);
export default User;