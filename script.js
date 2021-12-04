var express = require("express");
var app = express();
var port = 8080;
app.set('port', port);

var directory = express.static('public');
app.use(directory);

app.get('/test', function (req, res) {
    console.log("Test is working...");
});

app.listen(port, () => {
    console.log("Hello! I am listening to the port: " + port);
});

