const passport = require('passport');
const User = require('../models/UserModel')

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//   }, (email, password, done) => {
//         Users.findOne({ email }).then((user) => {

//             if (!user || !user.validatePassword(password)) {
//                 return done(null, false, { errors: { 'email or password': 'is invalid' } });
//             }
//             return done(null, user);

//         }).catch(done);
//   }));

module.exports = passport;