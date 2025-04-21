const Review = require('../models/review.js');
const Listing = require("../models/listing.js");

module.exports.addreview = async (req, res) => {
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Reviews Added");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deletereview = async (req, res, next) => {
    let { id, reviewId } = req.params;
    
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Reviews Deleted Successfully");
    res.redirect(`/listings/${id}`);
};