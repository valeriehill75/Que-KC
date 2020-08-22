const router = require("express").Router();
const UserData = require("../../models/usersModel");

//access by "localhost:3001/users/signup" in postman
router.route("/signup").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  //beginning of passport code for /signup route
  UserData.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const newUser = new UserData({
        email,
        password,
        firstName,
        lastName,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

//existing user login
router.route("/").get((req, res) => {
  //logged in user is held in req.user
  UserData.find()
    .populate("reviews")
    .then((users) => res.json(users));
});
router.route("/login").post((req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.send("Wrong username or password");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.route("/confirm").post((req, res) => {
  UserData.findOne(email, password).then((user) => {
    res.json(user);
  });
});

// router.route("/login").post((req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   UserData.findOne(email, password).then((user) => {
//     res.json(user);
//   });
// });

module.exports = router;
