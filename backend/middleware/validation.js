/*
 * VALIDATION MIDDLEWARE
 * Purpose: Validates incoming request data (body, params, query)
 * Connected To: routes files (applied to endpoints), validators/ directory (uses validation schemas)
 * Used By: Protected routes to ensure data integrity before processing
 * Process: Checks request against validation schemas, returns errors if validation fails
 */

export function validate(schema, source = 'body') {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[source], {
            abortEarly: false,
            stripUnknown: true,
        });

        if (error) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: error.details.map((detail) => detail.message),
            });
        }

        req[source] = value;
        next();
    };
}