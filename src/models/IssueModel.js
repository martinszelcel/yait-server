const mongoose = require('mongoose');
const { Schema } = mongoose;

const IssueSchema = new Schema({
    key: { type: String },
    creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    assignedUser: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    parent: { type: Schema.Types.ObjectId, ref: 'Issue' },
}, {
    timestamps: true
});

module.exports = mongoose.model('Issue', IssueSchema);