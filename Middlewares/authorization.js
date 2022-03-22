import ErrorHandler from '../Utils/errorHandler.js';

const authorization = (...types) => {
    return (req, res, next) => {
        if(!types.includes(req.user.type)) {
            next(new ErrorHandler(`Role (${req.user.type}) is not allowed to acccess this resource`, 403))
        }
        next()
    }
}

export default authorization;