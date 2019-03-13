var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();

app.use(morgan("common"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use(function(req, res) {
    res.status(404);
    res.send("File not Found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000"); 
});