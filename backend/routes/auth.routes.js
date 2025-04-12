const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");
const { validateSignup } = require("../middleware/validateRequest");

router.post("/signup", validateSignup, auth.signup);
router.post("/signin", auth.signin);

module.exports = router;
