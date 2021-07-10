const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, lowercase: true, required: true },
    isVerified: { type: Boolean, default: false },
    password: { type: String, required: true },
});

UserSchema.methods.setPassword = async function (password) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
};

UserSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// UserSchema.methods.generateJWT = function() {
//     const today = new Date();
//     const expirationDate = new Date(today);
//     expirationDate.setDate(today.getDate() + 60);

//     user = {
//         email: this.email,
//         id: this._id,
//         device_id: ...
//         exp: parseInt(expirationDate.getTime() / 1000, 10),
//     }

//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
// }

// Auth with JWT
// jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

//})
  
// UserSchema.methods.toAuthJSON = function() {
//     return {
//         _id: this._id,
//         email: this.email,
//         token: this.generateJWT(),
//     };
// };

module.exports = mongoose.model('User', UserSchema);