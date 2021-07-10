const Issue = require('../../models/IssueModel');

module.exports = function (req, res) {
    const userId = req.userId;
    const issue = req.body;

    const newIssue = new Issue({
        creator: userId,
        title: issue.title,
        description: issue.description,
        assignedUser: issue.assignedUser
    });

    newIssue.save().then(result => {
        res.status(201).send();
    });
}