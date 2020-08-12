const db = require("../models/usersModel");


//Defining methods
module.exports = {
    findAll: function(req, res) {
        db.UserData
            .find(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err)); 
    },
    create: function(req, res) {
        db.UserData
        .create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
}