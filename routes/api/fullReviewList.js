const router = require("express").Router();
const fullReviewController = require("../../controllers/fullReviewController");

router.route("/")
    .get(fullReviewController.findAll)
    .post(fullReviewController.create);

module.exports = router;