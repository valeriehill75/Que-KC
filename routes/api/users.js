const router = require("express").Router();
// const { signup, login } = require("../../controllers/userController");
const UserData = require("../../models/usersModel");

// router.route("/signup").post(signUp);
// router.route("/login").post(logIn);

//access by "localhost:3001/users/"" in postman
router.route("/").get((req, res) => {
  UserData.find().then((users) => res.json(users));
});

//access by "localhost:3001/users/signup" in postman
router.route("/signup").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const newUser = new UserData({ email, password, firstName, lastName });

  newUser.save().then(() => res.json("User added!"));
});
module.exports = router;
