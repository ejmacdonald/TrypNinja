require('dotenv').config();
const express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
var db = require("../models");

//AWS
//aws keys
var accessKeyId = process.env.aws_access_key_id;
var secretAccessKey = process.env.aws_secret_access_key;
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
    console.log(req.body);
    console.log(req.files[0].location);

    db.Moment.create({
      moment: req.files[0].location, 
      isPhoto: 1,
      caption: req.body.caption,
      EventId: req.body.storyId
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
});


module.exports = {router, db}