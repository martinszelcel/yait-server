const Issue = require('../../models/IssueModel');

module.exports = function (req, res) {
    const { id } = req.params;

    Issue.getById(id).then(issue => {
        res.json(issue);
    })
}