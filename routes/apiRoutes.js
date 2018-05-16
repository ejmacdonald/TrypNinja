const axios = require('axios')
const express = require('express');
var router = express.Router();
var db = require("../models");

router.get("/all", (req,res)=>{
  db.User.findAll()
  .then(users=>{
    res.send(users)
  })
})

router.get("/:id", (req,res)=>{
  let id = req.params.id
  db.User.find({where:{googleId:id}})
  .then((user)=>{
    if(user){
      console.log(user)
      res.send(user)
    }
    else{
      res.send(false)
    }
  })
})
router.post("/:id/:name/:img", (req, res) => {
  let id = req.params.id
  let name = req.params.name
  let img = req.params.img
  if (id!="null"&&id){
    db.User.create({ userName: name, googleId: id, profileImg: decodeURIComponent(img)})
      .then((user) => {
        console.log(user)
        res.send(user)
      })
  }
})
module.exports = {router, db}