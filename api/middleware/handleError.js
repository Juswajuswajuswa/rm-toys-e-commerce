export const handleError = (error, req, res, next) => {
    // Log the full error stack in development for debugging
    if (process.env.NODE_ENV === 'development') {
        console.error(error.stack);
    }

    // Send only the error message to the client
    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Internal Server Error"
    });
};
// handle error or make a possible error
export const handleMakeError = (statusCode, message) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = message 
    return error 
} 