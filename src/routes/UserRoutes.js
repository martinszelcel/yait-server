const router = require('express').Router();
const logger = require('../config/logger')
const User = require('../models/UserModel');

const path = 'users'

// /**
//  * Return currently logged user.
//  * @returns currently logged user object in json format
//  */
// router.get('/', (req, res) => {
//     User.find({}).exec().then(users => res.json(users))
// });

// /**
//  * Adds new user.
//  * @param object with name key
//  * @returns created user object
//  */
// router.post('/', (req, res) => {
//     logger.info(req.body);
//     const {name} = req.body;
//     new User({name: name}).save().then(user => {
//         res.json(user)
//     });
// })

module.exports = {router, path};