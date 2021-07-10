const router = require('express').Router();
const login = require('../services/auth/login');
const refreshToken = require('../services/auth/refreshToken');
const register = require('../services/auth/register');

const path = 'auth'

router.post('/register', register);

router.post('/login', login);

router.post('/refreshToken', refreshToken);

// router.get('/current', auth.required, (req, res, next) => {
//   const { id } = req.payload;

//   return Users.findById(id)
//     .then((user) => {
//       if(!user) {
//         return res.sendStatus(400);
//       }

//       return res.json({ user: user.toAuthJSON() });
//     });
// });

module.exports = {router, path};