const express = require("express");
const rounter = express.Router();


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

module.exports = router