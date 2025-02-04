const asyncHandler = (requesHandler) => {
    (req, res, next) => {
        Promise.resolve(requesHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}

//try and catch method
/*------it is basically fun in fun like asynHandle = (fun) => {async () => { }}
// const asyncHandler = (fn) => async () => {}

    const asyncHandler = (fn) => async(req,res,next) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            res.status(error.code || 500).json({
                success:false,
                message:error.message
            })
        }
    }
    
    export {asyncHandler} 

    ----*/