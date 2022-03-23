import jwt from 'jsonwebtoken';

import ErrorHandler from "../Utils/errorHandler.js";
import Users from "../Models/Account/vendorAccount.js";

const authentication = async (req, res, next) => {
    try {
        const token  = req.headers.authentication;
        if (!token) {
          return next(
            new ErrorHandler("Please login for access this resource")
          );
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await Users.findById(decode.id);
        next();
    } catch (err) {
        return next(new ErrorHandler("Authentication Failed", 401));
    }
    
}

export default authentication;