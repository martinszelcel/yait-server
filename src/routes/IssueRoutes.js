const router = require('express').Router();
const auth = require('../services/auth/auth')

const getIssue = require('../services/issue/getIssue');
const addIssue = require('../services/issue/addIssue');
const updateIssue = require('../services/issue/updateIssue');

const path = 'issue'

router.get('/:id', auth.required, getIssue);

router.post('/', auth.required, addIssue);

router.patch('/:id', auth.required, updateIssue);

module.exports = {router, path};