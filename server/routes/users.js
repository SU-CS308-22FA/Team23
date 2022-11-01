var express = require("express");
var router = express.Router();
const userModel = require("../models/user.model");
let bcrypt = require('bcrypt');
let auth = require('../controller/auth');

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.post("/signin", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let users = await userModel.find().where({ email: email });
  if (users.length > 0) {
    let comparisonResult = await bcrypt.compare(password, users[0].password);
    if (comparisonResult) {
      let token = auth.generateToken(users[0]);
      res.cookie('auth_token', token);
      res.send({
        redirectURL: '/',
        message: 'correct email'
      });
    } else {
      console.log("wrong password");
    }
  } else {
    console.log("wrong email");
  }
})


router.post("/signup", async (req, res) => {
  //check if the user registered before
  var newUser = new userModel();
  newUser.name = req.body.name;
  newUser.lastname = req.body.lastname;
  newUser.email = req.body.email;
  newUser.password = await bcrypt.hash(req.body.password, 12);
  newUser.status = true;

  let users = await userModel.find().where({ email: newUser.email });
  if (users.length === 0) {
    await newUser.save(function (err, data) {
      if (err) {
        console.log(error);
      } else {
        res.send({
          redirectURL: '/signin',
          message: 'data inserted'
        });
      }
    });
    res.send({ message: 'Done' });
  } else {
    res.send({ message: 'Rejected' });
  }
  //res.send("Login page");
});

router.get("/profile", function (req, res) {
  res.send("Profile page");
});

// router.post("save", function (req, res) {
//   var newUser = new userModel();
//   newUser.name = req.body.name;
//   newUser.lastname = req.body.lastname;
//   newUser.email = req.body.email;
//   newUser.password = req.body.password;

//   newUser.save(function (err, data) {
//     if (err) {
//       console.log(error);
//     } else {
//       res.send("Data inserted");
//     }
//   });
// });

module.exports = router;

// tes 12 12 12
