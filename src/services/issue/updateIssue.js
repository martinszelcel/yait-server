const Issue = require('../../models/IssueModel');

module.exports = function (req, res) {
    const { id } = req.params;
    const issueUpdate = req.body;

    Issue.getById(id).then(issue => {
        issue.title = issueUpdate.title;
        issue.description = issueUpdate.description;
        issue.assignedUser = issueUpdate.assignedUser;
        
        issue.save().then(() => {
            res.json(issue);
        });
    })
}