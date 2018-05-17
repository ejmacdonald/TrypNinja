const express = require('express');
var router = express.Router();
const user = require("./apiRoutes.js")
const user2 = require("./user-api-routes.js")
const db = user.db;
const event = require("./events-api-routes.js")
const moment = require("./moments-api-routes.js")

router.use("/user", user.router)
router.use("/user", user2)
router.use("/event", event)
router.use("/moment", moment)

module.exports = {router, db}