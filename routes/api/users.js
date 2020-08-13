const router = require("express").Router();
// const { signup, login } = require("../../controllers/userController");
const UserData = require("../../models/usersModel");

// router.route("/signup").post(signUp);
// router.route("/login").post(logIn);

router.route("/login").get((req, res) => {
  UserData.find().then((users) => res.json(users));
});

router.route("/signup").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new UserData({ email, password });

  newUser.save().then(() => res.json("User added!"));
});
module.exports = router;
