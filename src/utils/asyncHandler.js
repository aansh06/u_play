// utility function asyncHandler for handling asynchronous Express.js route handlers

// asyncHandler function takes another function requestHandler as an argument. This requestHandler function is assumed to be an asynchronous route handler ie a function that returns a Promise
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// approach 2
/*
const asyncHandler = (fn) => async (req,res,next) => {
    try{
        await fn(req,res,next)

    } catch (error){
            res.status(err.code || 500).json({
                success: false,
                message: err.message
            })
    }
}
*/
