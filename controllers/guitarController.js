const db = require("../models");

module.exports = {
    findGuitars: function(req, res) {
        db.Guitar.find({})
        .then( dbGuitar => res.json(dbGuitar))
        .catch(err => res.status(404).json(err));
    },

    findGuitarByName: function(req, res) {
        db.Guitar.find({guitar: req.params.guitar})
        .then(dbGuitarName => res.json(dbGuitarName))
        .catch(err => res.status(422).json(err))
    },


    create: function(req, res) {
        db.Guitar.create(req.body)
        .then(dbnewGuitar => res.json(dbnewGuitar))
        .catch(err => res.status(422).json(err));
    },

    updateGuitars: function(req, res) {
        db.Guitar.findOneAndUpdate({_id: req.params.id}, req.body)

        .then(dbupdate => res.json(dbupdate))
        .catch(err => res.status(422).json(err));
    },
    updateGuitarQty: function(req, res) {
        db.Guitar.findOneAndUpdate({
            quantity: req.params.quantity
        }, req.body)
        .then(dbupdate => res.json(dbupdate))
        .catch(err => res.status(422).json(err));
    },


}; 