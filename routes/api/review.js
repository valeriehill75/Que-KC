const router = require("express").Router();
const reviewController = require('../../controllers/reviewController')

// router
//   .route("/profile")
//   .get(reviewController.findAll)
//   .post(reviewController.create);

// module.exports = router;

//access by "localhost:3001/users/"" in postman
router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

  module.exports = router;
