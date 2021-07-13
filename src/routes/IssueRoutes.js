const router = require('express').Router();
const auth = require('../services/auth/auth')

const getAllIssues = require('../services/issues/getAllIssues');
const getIssue = require('../services/issues/getIssue');
const addIssue = require('../services/issues/addIssue');
const updateIssue = require('../services/issues/updateIssue');

const path = 'issues'

router.get('/', auth.required, getAllIssues);

router.get('/:id', auth.required, getIssue);

router.post('/', auth.required, addIssue);

router.patch('/:id', auth.required, updateIssue);

module.exports = {router, path};