const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

UserSchema.pre('save', function (next) {
  if(!this.isModified('password'))
      return next();
  bcrypt.hash(this.password,10,(err, passwordHash) => {
      if(err)
      return next(err); 
      this.password = passwordHash;
      next();   
  })
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
      if(err)
          return cb(err);
      else {
          if (!isMatch)
              return cb(null, isMatch);
          return cb(null, this);
      }
  })
}

const User = mongoose.model("User", UserSchema);
module.exports = User;
