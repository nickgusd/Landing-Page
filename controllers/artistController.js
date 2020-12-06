const db = require("../models");

module.exports = {
    findArtists: function(req, res) {
        db.Artist.find({})
        .then( dbArtist => res.json(dbArtist))
        .catch(err => res.status(404).json(err));
    },
    create: function(req, res) {
        db.Artist.create(req.body)
        .then(dbnewArtist => res.json(dbnewArtist))
        .catch(err => res.status(422).json(err));
    }


};