const Issue = require('../../models/IssueModel');

module.exports = function (req, res) {
    Issue.find().populate("project").then(issueList => {
        res.json(issueList);
    })
}