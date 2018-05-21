const axios = require('axios');
const express = require('express');
var router = express.Router();
var db = require("../models");

// Routes
// =============================================================
// module.exports = function(app) {
  console.log("in events-api-routes");
  
  // GET route for getting all of the posts
  router.get("/all", function(req, res) {
    console.log("in GET FINDALL event");
    var query = {};
    if (req.query.user_id) {
      query.AUserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findAll({
      include: [{model:db.User, attributes: ['userName', 'id']}, {model:db.Moment, where: {moment: {$ne: null}}, attributes:['moment']}],
      limit: 20,
      order: [['updatedAt', 'DESC']]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  //route to get the open events for a user and first moment for thumbnail display
  //using on StoryList.js
  router.get("/storyList/:id", function(req, res){
      console.log("storyList db call");
      db.Event.findAll({
        where: {
          UserId: req.params.id
        },
        order: [['updatedAt', 'DESC']],
        include: [db.Moment]
      }).then(function(dbEvent){
        console.log(dbEvent);
        res.json(dbEvent);
      });
  });


  // Get route for retrieving a single event
  router.get("/:id", function(req, res) {
    console.log("in GET FINDONE event");
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.User]
    }).then(function(dbEvent) {
      console.log(dbEvent);
      res.json(dbEvent);
    });
  });

  // POST route for saving a new event
  router.post("/createNew", function(req, res) {
    console.log("in POST route");
    console.log(req.body);
    db.Event.create({
      title: req.body.title, 
      UserId: req.body.userId
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });


  // DELETE route for deleting events
  router.delete("/api/events/:id", function(req, res) {
    console.log("in GET Delete One event");
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // PUT route for updating events
  router.put("/:id", function(req, res) {
    console.log("in nothing route");
    console.log("req.body: " + req.body);
    console.log("req.params.id: " + req.params.id);
    db.Event.update({
      isOpen: req.body.open,
     },
     {
      where: {
          id: req.params.id
      }
      }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
// };

module.exports = {router, db};
