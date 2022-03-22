import express from "express";
import { check } from "express-validator";
import { vendorLogin, vendorRegistration } from "../Controllers/vendorAccount.js";
import authentication from "../Middlewares/authentication.js";
import authorization from "../Middlewares/authorization.js";


const router= express.Router();
router.post("/account/vendor/registration",
[
  check("name","Name is Required").notEmpty(),
  check("email","Email is Required").isEmail(),
  check("mobile","Phone number must be 10 Numbers").isLength({min:10}),
  check("password","Please enter a password more than 8 characters ").isLength({min:8}),
],
vendorRegistration
);
router.post("/account/vendor/login", vendorLogin);

export default router;