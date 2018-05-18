const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var api = require('./routes/superRouter.js')
var html = require('./routes/htmlRoutes.js');
var bodyParser = require("body-parser");
const cors = require('cors');
var db = api.db

//enable cors
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/api",api.router);
app.use("/S3", html);
// Send every request to the React app
// Define any API routes before this runs

db.sequelize.sync({ force: false }).then(function()
{
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
