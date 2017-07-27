var express = require("express");
var app = express();
var port = process.env.PORT;

app.use(express.static('public/bootstrap'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(port, process.env.IP, () => {
  console.log("App is running on Cloud9 port:", port);
});