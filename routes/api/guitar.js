const router = require("express").Router();
const guitarController = require("../../controllers/guitarController");

//api route is "/api/guitar"
router.route("/")
    .get(guitarController.findGuitars)
    .post(guitarController.create)

    

module.exports = router;