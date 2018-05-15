const express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');

router.get("/", function(req,res){
  if(!req.user){
    res.redirect("/auth")
    //obviously we want to maybe be a LITTLE more nuanced here
  } else {res.send(`<h1>HEWWO ${req.user.name}</h1>`)}
});


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
    console.log(req);

});

module.exports = router