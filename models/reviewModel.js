const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating an instance of our schema
const ReviewSchema = new Schema({
    //User reviews the food with 1 - 5 stars
    foodRating: {
        type: String,
        trim: true,
        required: "* - ***** is required"
    },
    //User reviews the staff "sass" with 1 - 5 stars
    staffSass: {
        type: String,
        trim: true,
        required: "* - ***** is required"
    },
    //User reviews the restroom cleanliness with 1 - 5 stars    
    bathrooms: {
        type: String,
        trim: true,
        required: "* - ***** is required"
    },
    //User types in thier favorite item on the menu    
    faveItem: {
        type: String,
        trim: true,
        required: "A response is required."
    },
    //User describes the entire experience in three words
    threeWords: {
        type: String,
        trim: true,
        required: "A response is required."
    },
    //Timestamp on review
   reviewCreated: {
       type: Date,
       default: Date.now 
   } 
});

const UserReview = mongose.model("Review", ReviewSchema);

module.exports = UserReview;