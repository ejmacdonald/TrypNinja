const express = require('express');
var router = express.Router();

router.get("/", function(req,res){
  if(!req.user){
    res.redirect("/auth")
    //obviously we want to maybe be a LITTLE more nuanced here
  } else {res.send(`<h1>HEWWO ${req.user.name}</h1>`)}
})

module.exports = router