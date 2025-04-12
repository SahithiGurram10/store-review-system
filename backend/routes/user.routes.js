const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyToken, isAdmin } = require("../middleware/authJwt");

router.get("/", verifyToken, isAdmin, userController.getAllUsers);
router.get("/:id", verifyToken, userController.getUserById);

module.exports = router;
