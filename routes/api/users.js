const router = require("express").Router();
const passport = require('passport');
const passportConfig = require('../../config/passport');
const JWT = require('jsonwebtoken');
const User = require("../../models/usersModel");
const UserReview = require('../../models/reviewModel');

const signToken = userID => {
  return JWT.sign({
    iss: "Que-KCMO",
    sub: userID
  }, "Que-KCMO", { expiresIn: "1h" });
}

//access by "localhost:3002/users/signup" in postman
router.route("/signup").post((req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //beginning of passport code for /signup route
  User.findOne({ email }, (err, user) => {
    if (err)
      res.status(500).json({ message: { msgBody: "Error has occurred", msgError: true } });
    if (user)
      res.status(400).json({ message: { msgBody: 'Username is already taken', msgError: true } });
    if (!user) {
      const newUser = new User({
        email,
        password,
        firstName,
        lastName,
      });

      newUser.save(err => {
        if (err)
          res.status(500).json({ message: { msgBody: "Error has occurred", msgError: true } });
        else
          res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
      })
    }
  });
});

//existing user login
router.route("/").get((req, res) => {

  //logged in user is held in req.user
  User.find()
    .populate("reviews")
    .then((users) => res.json(users));
});

//logs user in
router.route("/login").post(
  passport.authenticate("local", { session: false }), (req, res) => {

    if (req.isAuthenticated()) {
      const { _id, email, firstName, lastName } = req.user;
      const token = signToken(_id);

      res.cookie('access_token', token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { email, firstName, lastName } })
    }
  })

router.route("/confirm").post((req, res) => {
  User.findOne(email, password)
    .then((user) => {
      res.json(user);
    });
});

//logs user out
router.route('/logout').get(
  passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { username: "", role: "" }, success: true });
  });

//creates a new review
router.route("/review").post(passport.authenticate('jwt', { session: false }), (req, res) => {
  const review = new UserReview(req.body);
  review.save(err => {
    if (err)
      res.status(500).json({ message: { msgBody: "Error has occurred", msgError: true } });
    else {
      req.user.reviews.push(review);
      req.user.save(err => {
        if (err)
          res.status(500).json({ message: { msgBody: "Error has occurred", msgError: true } });
        else
          res.status(200).json({ message: { msgBody: "Successfully created review", msgError: false } });
      })
    }
  })
});

//get all the reviews the user has
router.route("/reviews").get(
  passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id }).populate('reviews').exec((err, document) => {
      if (err)
        res.status(500).json({ message: { msgBody: "Error has occurred", msgError: true } });
      else {
        res.status(200).json({ reviews: document.reviews, authenticated: true });
      }

    })
  });


module.exports = router;

