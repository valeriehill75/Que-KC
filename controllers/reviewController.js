const UserReview = require("../models/reviewModel");
const UserData = require("../models/usersModel");
const { ObjectId } = require('mongodb');

//Defining methods
module.exports = {
  findAll(req, res) {
    UserReview.find(req.query)
      .then((dbReview) => res.json(dbReview))
      .catch((err) => res.status(422).json(err));
  },
  create(req, res) {
    const newReview = new UserReview(req.body);

    // newReview.save().then(() => res.json("Review added!"));
    newReview.save().then((dbReview) => {
      // return UserData.findOneAndUpdate({ _id: `ObjectId("${req.body.userId}")` }, {$push: {reviews: dbReview._id}}, { new: true });
      return UserData.findOneAndUpdate({ "_id": new ObjectId(req.body.userId) }, {$push: {reviews: dbReview._id}}, { new: true });
    })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      }) 
  }
};
