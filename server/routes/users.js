var express = require("express");
var router = express.Router();
const userModel = require("../models/user.model");

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });



router.post("/signup", function (req, res) {
  //check if the user registered before
  var newUser = new userModel();
  newUser.name = req.body.name;
  newUser.lastname = req.body.lastname;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.status = true;

  newUser.save(function (err, data) {
    if (err) {
      console.log(error);
    } else {
      res.send("Data inserted");
    }
  });
  //res.send("Login page");
});

router.get("/signin", function (req, res) {
  res.send("Signin page");
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
