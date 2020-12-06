const db = require("../models");

module.exports = {
    findGuitars: function(req, res) {
        db.Guitar.find({})
        .then( dbGuitar => res.json(dbGuitar))
        .catch(err => res.status(404).json(err));
    },
    create: function(req, res) {
        db.Guitar.create(req.body)
        .then(dbnewGuitar => res.json(dbnewGuitar))
        .catch(err => res.status(422).json(err));
    }


};