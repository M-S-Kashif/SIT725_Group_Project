//Requesting Dummy Projects...
const requestProjects = () => {
    $.get('projectlist', (projects) => {
        if (projects.length > 0) {
            console.log(projects);
            projectlist(projects);
        }
    });
};

//Appending Contents into our cards...
projectlist = (projects) => {
    projects.forEach(project => {
        console.log(project);
        let item = '<div class="col s8">' +
            '<ul>' +
            '<li>' + project.name + '</li>' +
            '<li>' + project.title + '</li>' +
            '<li>' + project.description + '</li>' +
            '<li>' + project.image + '</li>' +
            '</ul>' +
            '</div>';

        $('#projectlist').append(item);
    });
};

//script to run in the about page...
$(document).ready(function () {
    console.log("Running the second Environment Script!");

    //Initializing Modal.html
    $('.modal').modal();

    //Calling in Function to request for projects...
    requestProjects();
});


//Submitting a new Project by an ajax call to the rest api...
const submitProject = (project) => {
    $.ajax({
        url: '/projectlist',
        contentType: 'application/json',
        data: JSON.stringify(project), //access in body
        type: 'POST',
        success: function (result) {
            alert("Project successfully submitted...");
            console.log("Project successfully submitted...");
        }
    })
};

//Adding a new Project (from about.html)...
const newProject = () => {
    let name = $('#name').val();
    let title = $('#title').val();
    let image = $('#image').val();
    let description = $('#description').val();

    let userproject = { name, title, description, image };
    console.log("New Project created by " + userproject.name);
    submitProject(userproject);
};