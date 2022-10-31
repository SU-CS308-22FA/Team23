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
