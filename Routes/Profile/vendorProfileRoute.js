import express from "express";
import { check } from "express-validator";
import { createVendorProfile } from "../../Controllers/Profile/vendorProfileController.js";
import authentication from "../../Middlewares/authentication.js";
import authorization from "../../Middlewares/authorization.js";

const router = express.Router();

router.post(
  "/account/vendor/create-profile",
  [
    check("name", "Name is Required").notEmpty(),
    check("email", "Email is Required").isEmail(),
    check("mobile", "Phone number must be 10 Numbers").isLength({ min: 10 }),
    check('pincode', "Pincode is Required").notEmpty(),
    check("city", "City is Required").notEmpty(),
    check("state", "State is Required").notEmpty(),
  ],
  authentication,
  authorization("photographer"),
  createVendorProfile
);

export default router;
