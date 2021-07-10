const Issue = require('../../models/IssueModel');

module.exports = function (req, res) {
    Issue.find().then(issueList => {
        res.json(issueList);
    })
}