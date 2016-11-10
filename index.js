var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var compliments = require("./compliments")
var colors = require("./colors")

app.set ("view engine", "hbs")
app.use(express.static("./public"))

app.get("/:name?", (req,res) => {
  var compliment = compliments[Math.floor((Math.random() * compliments.length))]
  var color = colors[Math.floor((Math.random() * colors.length))]
  var name = req.params.name? req.params.name : ''
  res.render("index", {compliment, color, name})
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
