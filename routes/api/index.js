const router = require("express").Router();
const reviewRoutes = require("./review");

router.use("/review", reviewRoutes);

module.exports = router;
