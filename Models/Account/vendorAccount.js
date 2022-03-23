import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    mobile: {
      type: Number,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("vendor", vendorSchema);
export default Vendor;
