const express = require("express");
const router = express.Router();

const passportJMT = require("../middlewares/passportJWT");
const authController = require("../controllers/authController");
const { isEmail, hasPassword, hasName } = require("../validations/validators");

router.post("/login", authController.login);
router.post("signup", [isEmail, hasPassword, hasName], authController.signup);
router.get("/me", passportJMT.authenticate(), authController.me);

module.exports = router;