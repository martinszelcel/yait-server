const Project = require('../../models/ProjectModel');

module.exports = function (req, res) {
    Project.find().then(projectList => {
        res.json(projectList);
    })
}