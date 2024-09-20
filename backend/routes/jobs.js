const express = require('express');
const { getJobs } = require('../controllers/jobsController');
const router = express.Router();

router.get('/', getJobs);
// router.get('/:id', getJobById);

module.exports = router;
