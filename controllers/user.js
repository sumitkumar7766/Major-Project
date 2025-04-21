const User = require("../models/user.js");

module.exports.signuppost = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return nect(err);
            } else {
                req.flash("success", "User was Registered Successfully");
                res.redirect("/listings");
            }
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

};

module.exports.signupget = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.loginget = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.loginpost = async (req, res) => {
    req.flash("success", "Welcome to Wanderlust You are logedin")
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are Loged Out!");
        res.redirect("/listings");
    })
};