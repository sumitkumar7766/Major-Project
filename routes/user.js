const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const { route } = require("./listing");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userCentroller = require("../controllers/user.js");


router.route("/signup")
    .get(userCentroller.signupget)
    .post(wrapAsync(userCentroller.signuppost))


router.route("/login")
    .get(userCentroller.loginget)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userCentroller.loginpost)


router.get("/logout", userCentroller.logout);

module.exports = router;