const router = require("express").Router();
const guitarController = require("../../controllers/guitarController");


//api route is "/api/guitar"
router.route("/")
    .get(guitarController.findGuitars)
    .post(guitarController.create)

//api route is "/api/guitar/:id"
router.route("/:id")
    .put(guitarController.updateGuitars)

//api route is "/api/guitar/quantity/:id"
router.route("/quantity/:id")
    .put(guitarController.updateGuitarQty)

//api route is "api/guitar/:guitar"    
router.route("/:guitar")
.get(guitarController.findGuitarByName)


module.exports = router;