const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, lowercase: true, required: true },
    isVerified: { type: Boolean, default: false },
    password: { type: String, required: true },
}, {
    timestamps: true
});

UserSchema.methods.setPassword = async function (password) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
};

UserSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);