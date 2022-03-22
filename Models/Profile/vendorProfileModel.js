import mongoose from "mongoose";

const vendorProfileSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
        type: String
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    about: {
        type: String
    },
    studioName: {
        type: String
    },
    paymentTerms: {
        type: String
    },
    additionalCost: {
        type: String
    },
    experience: {
        type: String
    },
    siteUrl: {
        type: String
    },
    fbUrl: {
        type: String
    },
    instaUrl: {
        type: String
    },
    youtubeUrl: {
        type: String
    },
    address: {
        pincode: {
            type: Number,
            required: true,
        },
        city: {
            type: String,
            required: true 
        },
        state: {
            type: String,
            required: true
        },
        landmark: {
            type: String
        },
        addressLine1: {
            type: String
        },
        addressLine2: {
            type: String
        }
    }
  },
  {
    timestamps: true,
  }
);

const VendorProfile = mongoose.model("vendorProfile", vendorProfileSchema);
export default VendorProfile;
