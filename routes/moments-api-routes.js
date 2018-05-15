// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/moments", function(req, res) {
    var query = {};
    if (req.query.event_id) {
      query.EventId = req.query.event_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
    db.Moment.findAll({
      where: query,
      include: [db.Event]
    }).then(function(dbMoment) {
      res.json(dbMoment);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
    db.Moment.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Event]
    }).then(function(dbMoment) {
      res.json(dbMoment);
    });
  });

  // POST route for saving a new moment
  app.post("/api/moments", function(req, res) {
    db.Moment.create(req.body).then(function(dbEvent) {
      res.json(dbMoment);
    });
  });

  // DELETE route for deleting moment
  app.delete("/api/moments/:id", function(req, res) {
    db.Moment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMoment) {
      res.json(dbMoment);
    });
  });

  // PUT route for updating moments
  app.put("/api/moments", function(req, res) {
    db.Moment.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbMoment) {
      res.json(dbMoment);
    });
  });
};
