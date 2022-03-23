import VendorProfile from "../../Models/Profile/vendorProfileModel";
import ErrorHandler from "../../Utils/errorHandler";

// Create Vendor Profile Start
export const createVendorProfile = async (req, res, next) => {
  const {
    name,
    img,
    type,
    email,
    mobile,
    about,
    studioName,
    paymentTerms,
    additionalCost,
    experience,
    siteUrl,
    fbUrl,
    instaUrl,
    youtubeUrl,
    pincode,
    city,
    state,
    landmark,
    addressLine1,
    addressLine2,
  } = req.body;

  const id = req.params.id;

  try {
    
  } catch (error) {
      return next(new ErrorHandler(error, 500));
  }
};
// Create Vendor PRofile End

// Get Vendor Profile Start
const getVendorProfile = async (req, res, next) => {};
// Get Vendor Profile End

// update Vendor Profile Start
const updateVendorProfile = async (req, res, next) => {};
// update Vendor Profile End

// const createVendorProfile = async(req, res,next) => {}
