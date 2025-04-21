const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require('../models/listing.js');
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingCentroller = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")
    .get(wrapAsync(listingCentroller.index))
    .post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync(listingCentroller.createListing));
    

// New Route
router.get("/new", isLoggedIn, listingCentroller.renderNewForm);


router.route("/:id")
    .get( wrapAsync(listingCentroller.showListings))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingCentroller.updateForm))
    .delete(isLoggedIn, isOwner, wrapAsync(listingCentroller.deleteListing));


//edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingCentroller.editListing));


module.exports = router;