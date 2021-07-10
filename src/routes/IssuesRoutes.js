const router = require('express').Router();
const auth = require('../services/auth/auth')

const getAllIssues = require('../services/issue/getAllIssues');

const path = 'issues'

router.get('/', auth.required, getAllIssues);

module.exports = {router, path};