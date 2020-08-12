const router = require("express").Router();
const { signUp, logIn } = require("../../controllers/userController");

 router.route("/signup")
     .post(signUp);

 router.route("/login")
     .post(logIn);

module.exports = router;
