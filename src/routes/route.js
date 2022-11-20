const express = require("express");
const router = express.Router();
const urlController = require("../controller/urlController");

//*****************************[Api for createShortUrl]***************************//
router.post("/url/shorten", urlController.createShortUrl);

//*****************************[Api for getUrl]***********************************//
router.get("/:urlCode", urlController.getUrl);

//*****************************[Checking end point valid or not*******************//
router.all("/**", function (req, res) {
  res.status(404).send({
    status: false,
    message: "Make Sure Your Endpoint is Correct or Not!",
  });
});

module.exports = router;
