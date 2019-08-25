var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener to start the server

app.listen(PORT, function() {
console.log("app listening on localhost:" + PORT);
});

