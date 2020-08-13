const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);

router.use(function(_, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

//Not sure at all on line 7 - will that work?