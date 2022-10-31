const express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
const { Schema } = mongoose;

const { MongoClient, MongoGridFSChunkError } = require("mongodb");
const userModel = require("../models/user");

let msg = new userModel({
  name: "Musti",
  lastname: "Banana",
  age: 29,
  team: "Trabzonspor",
  email: "senol61@gmail.com",
  password: "String,",
});

msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

//Implementing CRUD operations

//Post
router.post("/save", function (req, res) {
  var newUser = new userModel();
  newUser.name = req.body.name;
  newUser.lastname = req.body.lastname;
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  newUser.save(function (err, data) {
    if (err) {
      console.log(error);
    } else {
      res.send("Data inserted");
    }
  });
});
