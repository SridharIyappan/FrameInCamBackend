import express from "express";
import { check } from "express-validator";
import {
  vendorFacebookLogin,
  vendorFacebookRegistration,
  vendorGoogleLogin,
  vendorGoogleRegitration,
  vendorLogin,
  vendorRegistration,
} from "../../Controllers/Account/vendorAccount.js";
import authentication from "../../Middlewares/authentication.js";
import authorization from "../../Middlewares/authorization.js";

const router = express.Router();
router.post(
  "/account/vendor/registration",
  [
    check("name", "Name is Required").notEmpty(),
    check("email", "Email is Required").isEmail(),
    // check("mobile", "Phone number must be 10 Numbers").isLength({ min: 10 }),
    // check(
    //   "password",
    //   "Please enter a password more than 8 characters "
    // ).isLength({ min: 8 }),
  ],
  vendorRegistration
);
router.post("/account/vendor/login", vendorLogin);
router.post('/account/vendor/google-register', vendorGoogleRegitration);
router.post('/account/vendor/google-login', vendorGoogleLogin);
router.post('/account/vendor/facebook-register', vendorFacebookRegistration);
router.post('/account/vendor/facebook-login', vendorFacebookLogin);

export default router;
