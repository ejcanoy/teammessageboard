const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    account_id: [{ type: Schema.Types.ObjectId, ref: "Account"}],
    message_date: { type: String },
    title: { type: String },
    message: { type: String },
})

MessageSchema.virtual("url").get(function () {
    return `/message/${this._id}`;
})

module.exports = mongoose.model("Message", MessageSchema);