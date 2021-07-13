const Project = require('../../models/ProjectModel');

module.exports = function (req, res) {
    const project = req.body;

    const newProject = new Project({
        name: project.name,
        description: project.description,
    });

    newProject.save().then(result => {
        res.status(201).send();
    });
}