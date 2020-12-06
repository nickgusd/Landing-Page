const router = require("express").Router();
const artistController = require("../../controllers/artistController");

//api route is "/api/guitar"
router.route("/")
    .get(artistController.findArtists)
    .post(artistController.create)

module.exports = router;