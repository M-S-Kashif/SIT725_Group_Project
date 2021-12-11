var express = require("express");
var bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
let dbConnect = require("./dbConnect");


let app = express();
var port = 8080;
app.set('port', port);

var directory = express.static('public');
app.use(directory);
app.use(bodyParser.json());


let projectsRouter = require('./routes/projects')
app.use('api/projects', projectsRouter);

//Project Contents...
const dummyProject1 = {
    name: 'Hobbs',
    ID: 1,
    description: 'Used Unity to create a Mobile Application',
    title: "Mobile App",
    image: "Unity Mobile App"
};

const dummyProject2 = {
    name: 'Sohaib',
    ID: 2,
    description: 'Made a three-legged Robot with a camera',
    title: "Spy Robot",
    image: "Spy Robot"
};

let projectList = [dummyProject1, dummyProject2];



//Uploading our Project list contents on request...
app.get('/projectlist', (req, res) => {
    console.log('Sending in the list as requested...');
    //res.send(projectList);
    getProjects(res);
});


//Temporarily adding project data in the server...
app.post('/projectlist', (req, res) => {
    res.send('Project List');
    console.log('New project posted');
    console.log('body', req.body);
    let project = req.body;

    //Use this command for tesing instead of connecting the items in the database...
    //projectList.push(project);
    //res.send({result:200});

    insertProject(project, res);
});


app.get('/test', function (req, res) {
    console.log("Test is working...");
});

app.listen(port, () => {
    console.log("Hello! I am listening to the port: " + port);
});



//Establishing a Database Connection using MongoDB...
const uri = "mongodb+srv://sohaibkashif97:<password>@cluster0.ebnvy.mongodb.net/reckoning?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Creating a collection for our MongoDB...
let projectsCollection;

//Function to open the collection...
const openConnection = (message) => {
    client.connect((err, db) => {
        projectsCollection = client.db("RoboticsHut").collection("projects");
        if (!err) {
            console.log("Database Connected...")
        }
    });
};


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

//Make sure to open the connection...
openConnection();