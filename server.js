var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongoHeadlines", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// function personCard(person){
//   return `<li> ${person.name} is ${person.age} years old </li>`
// }
// var fs = require('fs');
// app.get("/", function(req, res){
//   fs.readFile("./views/layouts/main.handlebars", "utf8", function(err, main){
//     if(err) throw err;

//     fs.readFile("./views/index.handlebars", "utf8", function(err, page){
//       if(err) throw err;

//       var peopleHTML = data.map(x => personCard(x)).join("")
//       console.log(peopleHTML)
//       main = main.replace("{{{body}}}", page);
//       main = main.replace("{{people}}", peopleHTML)
//       res.send(main)
//     })
//   })
// })
var hbs = require('express-handlebars');
app.engine("handlebars", hbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

// Routes
require('./controllers')(app)

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
