const Issue = require('../../models/IssueModel');

module.exports = function (req, res) {
    const { id } = req.params;

    Issue.findById(id).populate("project").then(issue => {
        res.json(issue);
    })
}