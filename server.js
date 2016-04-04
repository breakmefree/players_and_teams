var express = require("express");
var path = require("path");
// require body-parser
var bodyParser = require('body-parser');
// create the express app
var app = express();

app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
//app.set('view engine', 'ejs');
// tell the express app to listen on port 3000
var server = app.listen(3000, function() {
	console.log("listening on port 3000");
})