const Project = require('../../models/ProjectModel');

module.exports = function (req, res) {
    const { id } = req.params;
    const {name, description} = req.body;

    Project.findById(id).then(project => {
        name ? project.name = name : null;
        description ? project.description = description : null;

        project.save().then(savedProject => {
            res.json(savedProject);
        });
    })
}