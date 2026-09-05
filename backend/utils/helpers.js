/*
 * GENERAL UTILITIES/HELPERS
 * Purpose: Reusable utility functions for common operations (formatting, validation, etc.)
 * Connected To: Services, controllers, and any module needing helper functions
 * Used By: Throughout the application for common utility operations
 * Functions: formatResponse(), formatError(), paginationHelper(), etc.
 */

export function formatResponse(data, message = 'Success') {
    return {
        status: 'success',
        message,
        data,
    };
}

export function formatError(error, message = 'Error') {
    return {
        status: 'error',
        message,
        error: error.message || error,
    };
}

export function paginationHelper(page, limit) {
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    return {
        page: pageNumber,
        limit: limitNumber,
        skip
    }
}