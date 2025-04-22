const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"

        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    categery: {
        type: String,
        require: true,
    },
});

listingSchema.post("findOneAndDelete", async (listng) => {
    if (listng) {
        await Review.deleteMany({ _id: { $in: listng.reviews } })
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;