const asyncHandler = require("express-async-handler");
const Account = require("../models/account");

// add isAdmin
exports.admin_get = (req,res) => {
    res.locals.currentUser = req.user;
    res.render("admin-form");
}

exports.admin_post = asyncHandler(async (req, res) => {
    res.locals.currentUser = req.user;
    if (req.body.code === "adminteammessageboard") {
        const updatedField = {
            isAdmin : true,
        }
       await Account.findByIdAndUpdate(req.user._id, updatedField, {new: true});
    }

    res.redirect("/");
})

// add isMember

exports.member_get = (req,res) => {
    res.locals.currentUser = req.user;
    res.render("member-form");
}

exports.member_post = asyncHandler(async (req, res) => {
    res.locals.currentUser = req.user;
    if (req.body.code === "teammessageboard") {
        const updatedField = {
            isMember : true,
        }
       await Account.findByIdAndUpdate(req.user._id, updatedField, {new: true});
    }
    res.redirect("/");
})