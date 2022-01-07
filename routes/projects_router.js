console.log("Router Layer");
const express = require("express");
const router = express.Router();     //Initializes a Router...

//Importing Service Layer in Router Layer...
const projectController = require("../controller/project_controller");

//Uploading our Project list contents on request...
router.get('/projects', (req, res) => {
    console.log('Sending in the list as requested...');

    //res.send(projectList);
    projectController.getAllProjects(res);
    res.sendStatus(200);                  //Send the statuscode only once...
    res.json({ result: projectList });    //Check this from test.js...
});


//Temporarily adding project data in the server...
router.post('/projects', (req, res) => {
    console.log('Projects posted');
    console.log('body', req.body);

    let project = req.body;
    //Use this command for tesing instead of connecting the items in the database...
    //projectList.push(project);
    res.send(projectList);
    projectController.createProject(project, res);
});

//Exporting all the contents for our script...
module.exports = router












/*
//API for testing only...

router.get('/', (req, res) => {
    res.send("Hello from router. Getting resources from API for all projects...")
});

//Passing a parameter in a functions; we can also pass data with jQuery as well...
router.get('/:id', (req, res) => {
    res.send("Hello from router. Getting all resources from API for Project " + req.params.id + ".");
});

router.post('/', (req, res) =>{
    res.sendStatus(204);
});

router.put('/:id', (req, res) => {
    res.sendStatus("Hello from project update" + req.params.id + "resouces API.");
});

router.delete('/:id', (req, res) => {
    res.send("Hello from project delete" + req.params.id + " resources API");
});
 */
