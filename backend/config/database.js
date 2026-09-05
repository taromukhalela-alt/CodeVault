/*
 * DATABASE CONFIGURATION
 * Purpose: Centralizes database connection settings and initialization
 * Connected To: server.js (imported and used to establish DB connection)
 * Used By: Database initialization, models for query execution
 * Returns: Database connection instance
 */

import mongoose from 'mongoose';
import { log, error } from '../utils/index.js';

async function connectDB() {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (caughtError) {
        error(`Error connecting to MongoDB: ${caughtError.message}`);
    }
}
