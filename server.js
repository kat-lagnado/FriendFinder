var require = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener to start the server

app.listen(PORT, function() {
console.log("app listening on PORT: " + PORT);
});

