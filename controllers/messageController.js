const Message = require("../models/message");
const asyncHandler = require("express-async-handler");


exports.message_post = asyncHandler(async (req, res) => {
    const message = new Message({
        account_id: req.user._id,
        message_date: new Date(),
        title: req.body.title,
        message: req.body.message
    })
    const result = await message.save();
    res.redirect("/");
})