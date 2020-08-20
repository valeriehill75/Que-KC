const User = require("../models/usersModel");
const localStrategy = require("passport-local").Strategy;
const passport = require("passport");

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      email: user.email,
    };
    cb(err, userInformation);
  });
});

// Serialize is used to keep user logged in from page to page.
passport.use(
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      });
    }
  )
);
