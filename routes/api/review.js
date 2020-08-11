const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/profile")
    .get(reviewController.findAll)
    .post(reviewController.create);

module.exports = router;