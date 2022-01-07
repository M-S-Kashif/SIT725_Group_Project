//Importing Libraries...
var express = require("express");
var bodyParser = require("body-parser");

//Importing Router Layer and DB Layer in Script...
let projectsRouter = require('./routes/projects_router');
let projectsDB = require('./db/project_db');

let app = express();
var port = 8080;
app.set('port', port);

var directory = express.static('public');
app.use(directory);
app.use(bodyParser.json());
app.use('/', projectsRouter);

app.get('/test', function (req, res) {
    console.log("Test is working...");
    res.sendStatus(200);           //Check this from test.js if this code is passed in the test mentioned...

    //Sending a sample json file...
    res.json({
        status: 200,
        result: 25
    });
});

app.listen(port, () => {
    console.log("Hello! I am listening to the port: " + port);
});

app.get('/add/:n1/:n2', function (req, res) {
    console.log("Adding two numbers...");
    let num1 = parseInt(req.params.n1);
    let num2 = parseInt(req.params.n2);
    let sum = num1 + num2;
    res.json({ result: sum });
    res.sendStatus(200);
});


//Make sure to open the connection...
projectsDB.connect();














/*
//Insert a project into the collection...
const insertProject = (project, res) => {
    projectsCollection.insert(project, (err, result) => {
        console.log('Project Inserted', result);
        //Send back response to the user once done...
        res.send({ result: 200 });
    });
};

//A Function to retrieve all the projects...
const getProjects = (res) => {
    projectsCollection.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};
*/
