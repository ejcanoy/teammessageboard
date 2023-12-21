const Account = require("../models/account");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            console.log("here");
            const account = await Account.findOne({ username: username });
            if (!account) {
                return done(null, false, { message: "Incorrect username" });
            };
            const match = await bcrypt.compare(password, account.password);
            if (!match) {
                return done(null, false, { message: "Incorrect password" })
            }
            return done(null, account);
        } catch (err) {
            return done(err);
        };
    })
);

passport.serializeUser((account, done) => {
    done(null, account.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const account = await Account.findById(id);
        done(null, account);
    } catch (err) {
        done(err);
    };
});

exports.index = asyncHandler(async (req, res) => {
    let messages;
    res.locals.currentUser = req.user;
    messages = await Message.find({})
        .populate("account_id")
        .exec();
    res.render("index", { messages: messages, title: `team message board`});
})

exports.sign_up_get = (req, res) => {
    res.render("sign-up-form");
}

exports.sign_up_post = asyncHandler((req, res, next) => {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
            const account = new Account({
                username: req.body.username,
                password: hashedPassword,
                isMember: false,
                isAdmin: false,
            });
            const result = await account.save();
            res.redirect("/");
        } catch (err) {
            return next(err);
        };
    })
})

exports.log_in_post = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
})

exports.log_out_get = (req,res,next) => {
    console.log("here");
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    })
}
