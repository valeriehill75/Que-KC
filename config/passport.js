const User = require("../models/usersModel");
const localStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const passport = require("passport");

const cookieExtractor = req => {
  let token = null;
  if(req && req.cookies) {
      token = req.cookies["access_token"];
  }
  return token;
}

//authorization, where we want to protect a resource/endpoint
passport.use(new JwtStrategy({
  jwtFromRequest : cookieExtractor,
  secretOrKey : 'Que-KCMO'
}, (payload, done) => {
  User.findById({_id: payload.sub}, (err, user) => {
      if(err)
          return done(err, false);
      if(user)
          return done(null, user);
      else 
          return done(null, false);
  })
}))

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
    { 
      usernameField: "email", 
      passwordField: "password" 
    },
    
    (email, password, done) => {
      User.findOne({ email }, (err, user) => {
        if (err)
          return done(err)
        //if no user exists    
        if (!user)
          return done(null, false);
        //comparePassword imported from Model
        user.comparePassword(password, done);
      });
    }
  )
);
