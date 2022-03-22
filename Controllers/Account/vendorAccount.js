import User from "../../Models/Account/vendorAccount.js";
import Cookie from "../../Utils/cookie.js";
import ErrorHandler from "../../Utils/errorHandler.js";
import sendEmail from "../../Utils/sendEmail.js";
import { generateToken } from "../../Utils/jwtToken.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

// Registration Start
export const vendorRegistration = async (req, res, next) => {
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return res.status(400).json({ validations: validation.array() });
  }
  try {
    let { name, password, mobile, email } = req.body;
    let findEmail = await User.findOne({ email });
    let findMobile = await User.findOne({ mobile });
    if (findEmail) {
      return next(new ErrorHandler("Email Id already exist", 400));
    }
    if (findMobile) {
      return next(new ErrorHandler("Mobile Number already exist", 400));
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const type = "photographer";
    let user = await new User({ name, password, mobile, email, type });
    await user.save();
    const logintoken = { id: user._id };
    const token = await generateToken(logintoken);
    console.log(token);
    return Cookie(user, token, 200, res);
  } catch (err) {
    return next(new ErrorHandler(err, 500));
  }
};
//Registration End

//Login Start
export const vendorLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler("Email Not Found", 404));
    }
    const passwordcrct = await bcrypt.compare(password, user.password);
    console.log(passwordcrct, "passwordMatch");
    if (!passwordcrct) {
      return next(new ErrorHandler("Incorrect Password", 400));
    }
    const logintoken = { id: user._id };
    const token = await generateToken(logintoken);
    return Cookie(user, token, 200, res);
  } catch (err) {
    return next(new ErrorHandler(err, 500));
  }
};
// Login End

// Google Registration Start
export const vendorGoogleRegitration = async(req, res, next) => {
  const {name, email} = req.body;
  try {
    const findEmail = await User.findOne({email});
    if(findEmail) {
      return next(new ErrorHandler("Account Already Exist", 400));
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(email, salt);
    const type = "photographer";
    let user = await new User({ name, mobile, email, password, type });
    await user.save();
    const logintoken = { id: user._id };
    const token = await generateToken(logintoken);
    console.log(token);
    return Cookie(user, token, 200, res);
  } catch (err) {
    return next(new ErrorHandler(err, 500));
  }
}
// Google Registration End

// Google Login Start
export const vendorGoogleLogin = async(req, res, next) => {
  const {email} = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler("Email Not Found", 404));
    }
    const passwordcrct = await bcrypt.compare(email, user.email);
    console.log(passwordcrct, "passwordMatch");
    if (!passwordcrct) {
      return next(new ErrorHandler("Incorrect Password", 400));
    }
    const logintoken = { id: user._id };
    const token = await generateToken(logintoken);
    return Cookie(user, token, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error, 500))
  }
}
// Google Login End

// Facebook Registration Start
export const vendorFacebookRegistration = async(req, res, next) => {
  const {mobile, name, email} = req.body;
  try {
    const findEmail = await User.findOne({mobile});
    if(findEmail) {
      return next(new ErrorHandler("Account Already Exist", 400));
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(mobile, salt);
    const type = "photographer";
    let user = await new User({ name, mobile, password, email, type });
    await user.save();
    const logintoken = { id: user._id };
    const token = await generateToken(logintoken);
    console.log(token);
    return Cookie(user, token, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error, 500))
  }
}
// Facebook Registration End

// Facebook Login Start
export const vendorFacebookLogin = async(req, res, next) => {
  const {mobile} = req.body;
  try {
    const user = await User.findOne({ mobile });
    if (!user) {
      return next(new ErrorHandler("Account Not Found Plaese Register", 404));
    }
    const passwordcrct = await bcrypt.compare(mobile, user.mobile);
    console.log(passwordcrct, "passwordMatch");
    if (!passwordcrct) {
      return next(new ErrorHandler("Incorrect Password", 400));
    }
    const logintoken = { id: user._id };
    const token = await generateToken(logintoken);
    return Cookie(user, token, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error, 500))
  }
}
// Facebook Login End
