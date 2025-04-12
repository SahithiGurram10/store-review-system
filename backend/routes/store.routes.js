const express = require("express");
const router = express.Router();
const storeController = require("../controllers/store.controller");
const { verifyToken, isOwner } = require("../middleware/authJwt");

router.post("/", verifyToken, isOwner, storeController.createStore);
router.get("/", verifyToken, storeController.getAllStores);
router.get("/:id", verifyToken, storeController.getStoreById);

module.exports = router;
