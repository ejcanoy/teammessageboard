const express = require('express');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const router = express.Router();
const auth_controller = require("../controllers/authController");

/* GET home page. */
router.get('/', auth_controller.index);


module.exports = router;
