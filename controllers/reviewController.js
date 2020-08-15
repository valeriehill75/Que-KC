const UserReview = require("../models/reviewModel");

//Defining methods
module.exports = {
  findAll(req, res) {
    UserReview.find(req.query)
      .then((dbReview) => res.json(dbReview))
      .catch((err) => res.status(422).json(err));
  },
  create(req, res) {
    const newReview = new UserReview(req.body);

    newReview.save().then(() => res.json("Review added!"));
  },
};
