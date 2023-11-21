// console.log("Hello world");

// To create a file
// var fs = require('fs');
// fs.writeFileSync('./kuchbhi','Sachin');

// To read a file
// var fs = require('fs');
// var a = fs.readFileSync('./kuchbhi','utf-8');
// console.log(a);

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome");
});

app.get("/profile", function (req, res) {
  res.send("This is profile");
});

app.get("/about", function (req, res) {
  res.send("This is about");
});

app.get("/contact", function (req, res) {
    res.send("My contact no is 7597630780");
  });


  app.use( function (req, res,next) {
    next()
  });

app.listen(3000);
