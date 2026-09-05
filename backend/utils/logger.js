/*
 * LOGGING UTILITIES
 * Purpose: Centralized logging configuration and helper functions
 * Connected To: All modules that need logging, middleware/errorHandler.js
 * Used By: Throughout the application for debugging and monitoring
 * Functions: log(), warn(), error(), info(), debug(), etc.
 */

const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",  
}

export function log(message) {
    console.log(`${colors.green}[LOG] ${new Date().toISOString()}: ${message}${colors.reset}`);
}

export function warn(message) {
    console.warn(`${colors.yellow}[WARN] ${new Date().toISOString()}: ${message}${colors.reset}`);
}

export function error(message) {
    console.error(`${colors.red}[ERROR] ${new Date().toISOString()}: ${message}${colors.reset}`);
}

export function info(message) {
    console.info(`${colors.blue}[INFO] ${new Date().toISOString()}: ${message}${colors.reset}`);
}

export function debug(message) {
    console.debug(`${colors.cyan}[DEBUG] ${new Date().toISOString()}: ${message}${colors.reset}`);
}
