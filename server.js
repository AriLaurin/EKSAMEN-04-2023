require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const {requireAuth, checkUser} = require("./middleware/middleware");
const cookieParser = require("cookie-parser");
const Routes = require("./routes/routes"); //importing the routes so our app actually uses them

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json()); //takes any json data from requests, and parses it into a js code
app.use(cookieParser()) // we can access cookie objects

// view engine
app.set('view engine', 'ejs');

const dbURI = process.env.mongoProducts
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(80))
  .then(console.log("DATABASE STATUS: CONNECTED"))
  .catch((err) => console.log(err));

// routes
app.get('/admin', requireAuth, (req, res) => res.render('admin'));
app.use(Routes);