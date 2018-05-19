const axios = require('axios');
const express = require('express');
var router = express.Router();
var db = require("../models");


router.get("/api/users", function(req, res) {
    //
    db.User.findAll({
      include: [db.Events]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  router.get("/api/users/:id", function(req, res) {
    console.log("Getting userID!!!");
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Event]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  router.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  router.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  module.exports = {router, db};