const db = require("..models");

//Defining methods
module.exports = {
    findAll: function(req, res) {
        db.UserReview
            .find(req.query)
            .then(dbReview => res.json(dbReview))
            .catch(err => res.status(422).json(err)); 
    },
    create: function(req, res) {
        db.UserReview
        .create(req.body)
        .then(dbReview => res.json(dbReview))
        .catch(err => res.status(422).json(err));
    }
}