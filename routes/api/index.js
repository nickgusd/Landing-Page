const path = require("path");
const router = require("express").Router();
const artistRoutes = require("./artist");
const guitarRoutes = require("./guitar")

// artist routes
router.use("/artist", artistRoutes);
router.use("/guitar", guitarRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;