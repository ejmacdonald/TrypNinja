const axios = require('axios')
const express = require('express');
var router = express.Router();
var db = require("../models");

function hash(obj) {
  var str = obj.googleId+Date.now().toString()
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

router.get("/all", (req,res)=>{
    db.User.findAll({attributes:['id','userName','profileImg'], order: [['updatedAt','DESC']]})
  .then(users=>{
    res.send(users)
  })
})

router.post("/object", (req,res)=>{
  let profile = req.body.data
  console.log(profile)
  let dbObject ={
    userName: profile.name,
    googleId: profile.googleId,
    profileImg: profile.imageUrl
  }
  db.User.findOrCreate({where:dbObject})
  .then((user, created)=>{
    const token = hash(profile)
    db.User.update({token: token}, {where: dbObject})
    console.log(`token: ${token}`)
    res.send(token.toString())
  })
  .catch(err=>console.log(err))
})
module.exports = {router, db}