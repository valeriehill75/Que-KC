const path = require("path");
const router = require("express").Router();
const userRoute = require("./api/users");
const reviewRoute = require("./api/review");

//API Routes
router.use("/api", userRoute, reviewRoute);

router.use(function(_, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

//Not sure at all on line 7 - will that work?