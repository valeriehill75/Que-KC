const router = require("express").Router();
const UserReview = require("../../models/reviewModel");

// router
//   .route("/profile")
//   .get(reviewController.findAll)
//   .post(reviewController.create);

// module.exports = router;

//access by "localhost:3001/users/"" in postman
router.route("/").get((req, res) => {
  UserReview.find().then((reviews) => res.json(reviews));
});

//access by "localhost:3001/users/signup" in postman
router.route("/post").post((req, res) => {
  const foodRating = req.body.foodRating;
  const staffSass = req.body.staffSass;
  const bathrooms = req.body.bathrooms;
  const faveItem = req.body.faveItem;
  const threeWords = req.body.threeWords;
  const newReview = new UserReview({
    foodRating,
    staffSass,
    bathrooms,
    faveItem,
    threeWords,
  });

  newReview.save().then(() => res.json("Review added!"));
});
module.exports = router;
