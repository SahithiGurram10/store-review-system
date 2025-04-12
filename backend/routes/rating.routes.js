const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/rating.controller");
const { verifyToken } = require("../middleware/authJwt");

router.post("/", verifyToken, ratingController.submitRating);
router.get("/:storeId", verifyToken, ratingController.getStoreRatings);

module.exports = router;
