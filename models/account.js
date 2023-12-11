const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
   name: { type: String },
   email: { type: String },
   password: { type: String },
   isMember: { type: Boolean },
   isAdmin: { type: Boolean }
})

AccountSchema.virtual("url").get(function () {
   return `/account/${this._id}`;
})

module.exports = mongoose.model("Account", AccountSchema);