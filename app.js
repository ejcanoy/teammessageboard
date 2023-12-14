require('dotenv').config()
const express = require('express');
const path = require('path');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const logger = require('morgan');

const indexRouter = require('./routes/indexRouter');
const authRouter = require("./routes/authRouter");
const messageRouter = require("./routes/messageRouter");

// Set up mongoose connection
const mongoose = require("mongoose");
const Account = require('./models/account');
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_DB_URL;


main().then(() => console.log('connected')).catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(logger('dev'));
app.use(express.json());
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/", messageRouter);

module.exports = app;
