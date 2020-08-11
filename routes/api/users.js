const router = require("express").Router();
const { signUp, logIn } = require("../controller/user");

router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
