//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var  items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/", function(req, res) {

  var today = new Date();
  //var currentDay = today.getDay();
  //var day = "";

// This is logi 1 to print the Current Day
  // if (currentDay === 6 || currentDay === 0) {
  //   res.sendFile(__dirname + "/weekend.html");
  // } else {
  //   res.sendFile(__dirname + "/weekday.html");
  // }



//  This is Logic 2 to print the Current Day using EJS

  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "Weekday";
  // }
  //

// Logic 3 : Using Switch case
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //   console.log("Error: current day is equal to: " + currentDay);
  // }
  // res.render("List", {kindOfDay: day});


// Logic 4 by Passing the Date function of javascript
  let option = {weekday: 'long', day: 'numeric', month: 'long'};

  let day = today.toLocaleDateString("en-US", option);

  res.render("List", {kindOfDay: day, newListItems: items});
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(2010, function() {
  console.log("Server is running on 2010");
})
