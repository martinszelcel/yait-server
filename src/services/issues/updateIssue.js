const Issue = require('../../models/IssueModel');

module.exports = function (req, res) {
    const { id } = req.params;
    const {title, description, assignedUser, projectId} = req.body;

    Issue.findById(id).then(issue => {
        title ? issue.title = title : null;
        description ? issue.description = description : null;
        assignedUser ? issue.assignedUser = assignedUser : null;
        projectId ? issue.project = projectId : null; 
        
        issue.save().then(savedIssue => {
            res.json(savedIssue);
        });
    })
}