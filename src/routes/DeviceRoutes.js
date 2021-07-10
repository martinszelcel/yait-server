const getLoggedDevices = require('../services/devices/getLoggedDevices');
const router = require('express').Router();
const auth = require('../services/auth/auth')

const path = 'devices'

router.get('/', auth.required, getLoggedDevices);

module.exports = {router, path};