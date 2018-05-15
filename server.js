const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var auth = require('./routes/apiRoutes.js')
var html = require('./routes/htmlRoutes.js');
var session = require("express-session"),
  bodyParser = require("body-parser");
var AWS = require('aws-sdk');
var multer = require('multer');
const cors = require('cors');
var router = express.Router();

var db = require("./models");

//enable cors
app.use(cors());

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(auth.passport.initialize());
app.use(auth.passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/auth",auth.router);
app.use("/", html);
// Send every request to the React app
// Define any API routes before this runs

db.sequelize.sync({ force: true }).then(function()
{
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
