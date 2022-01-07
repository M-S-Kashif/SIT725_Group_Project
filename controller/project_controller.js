console.log("Controller Layer");

//Importing DB Layer in Service Layer...
let dbo = require("../db/project_db");
let projectsCollection;

setTimeout(() => {
    projectsCollection = dbo.db("test").collection("devices");
    console.log("Accessed the projects...")
}, 2000);

//Initializing Dummy Projects...
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


const getAllProjects = (res) => {
    console.log('controller accessing the service to get all the projects...')

    //A Function to retrieve all the projects...
    projectsCollection.find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
    res.send(projectList);
    return projectList;
}

const createProject = (data, res) => {
    console.log("Creating a new project...")

    //Insert a project into the DB collection...
    projectsCollection.insertOne(project, (err, result) => {
        if (err) throw err;

        //Adding contents into an array...
        projectList.push(data);
        console.log('Project Inserted', result);
    });
}

module.exports = {
    getAllProjects, createProject
}

















/*

//Export the two functions from this script...
module.exports = {
    getProjects,
    insertProject
}

/*
let getAllProjects = (res) => {
    projectsCollection.find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const getProjectByID = (id, res) => {
    projectsCollection.find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const InsertProject = (project, res) => {
    projectsCollection.insertOne(project, (err, result) => {
        if (err) throw err;
        //Sending the result status...
        res.send({ result: 204 });
    });
}
*/
