const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/")
    .get(reviewController.findAll)
    .post(reviewController.create);

router.route("/:id") //if we decide to do a page showing all the reviewed bbq joints?
    .get(reviewController.findAll)
    .post(reviewController.create);

module.exports = router;