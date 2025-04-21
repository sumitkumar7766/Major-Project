const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require('../models/review.js');
const { isLoggedIn, validateReview, isreviewAuthor } = require("../middleware.js");
const reviewCentroller = require("../controllers/review.js");


// add review routes
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewCentroller.addreview));


//delet reviews route
router.delete("/:reviewId", isLoggedIn, isreviewAuthor, wrapAsync(reviewCentroller.deletereview));

module.exports = router;