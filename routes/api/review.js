const router = require("express").Router();
const reviewController = require('../../controllers/reviewController')

//access by "localhost:3001/users/"" in postman
router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

  module.exports = router;
