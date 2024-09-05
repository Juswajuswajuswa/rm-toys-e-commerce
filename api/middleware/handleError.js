export const handleError = (error, req, res, next) => {
    const message = process.env.NODE_ENV === 'development' ? error.stack : "Internal Server Error";
    res.status(error.status || 500).json({
        success: false,
        message
    })
}

// handle error or make a possible error
export const handleMakeError = (statusCode, message) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = message 
    return error 
} 