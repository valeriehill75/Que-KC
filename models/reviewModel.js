const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating an instance of our schema
const reviewSchema = new Schema({
  //User reviews the food with 1 - 5 stars
  foodRating: {
    type: Number,
    trim: true,
    required: "A response is required. (1-10 stars)",
  },
  //User reviews the staff "sass" with 1 - 5 stars
  staffSass: {
    type: Number,
    trim: true,
    required: "A response is required. (1-10 stars)",
  },
  //User reviews the restroom cleanliness with 1 - 5 stars
  bathrooms: {
    type: Number,
    trim: true,
    required: "A response is required. (1-10 stars)",
  },
  //User types in their favorite item on the menu
  faveItem: {
    type: String,
    trim: true,
    required: "A response is required. (What is your favorite menu item?",
  },
  //User describes the entire experience in three words
  threeWords: {
    type: String,
    trim: true,
    required:
      "A response is required. (Describe your experience in three words.",
  },
  //Timestamp on review
  reviewCreated: {
    type: Date,
    default: Date.now,
  },
});

const UserReview = mongoose.model("Review", reviewSchema);

module.exports = UserReview;
