const express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');

//AWS
//aws keys
var accessKeyId = process.env.AWS_ACCESS_KEY || "AKIAJSQNCM5K6YOIRMPA";
var secretAccessKey = process.env.AWS_SECRET_KEY || "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";
AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
});

    var s3 = new AWS.S3();


      var upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: 'mystoryscl5555',
            key: function (req, file, cb) {
                console.log(file);
                cb(null, Date.now().toString()); //use Date.now() for unique file keys
            }
        })
    });
  router.post('/S3', upload.array('selectedFile', 1), function(req, res){
    console.log("--------" );
    console.log(req.files[0].location);

    res.send(req.files[0].location);

});

  // POST route for saving a new event
  router.post("/api/events", function(req, res) {
    console.log("in Post");
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

module.exports = router