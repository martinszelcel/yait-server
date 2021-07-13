const router = require('express').Router();
const auth = require('../services/auth/auth')

const addProject = require('../services/projects/addProject');
const getAllProjects = require('../services/projects/getAllProjects');
const updateProject = require('../services/projects/updateProject');

const path = 'projects'

router.get('/', auth.required, getAllProjects);

router.post('/', auth.required, addProject);

router.patch('/:id', auth.required, updateProject);

module.exports = {router, path};