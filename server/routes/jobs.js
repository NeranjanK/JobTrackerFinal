import express from "express";
import { getJobs, createJob, updateJob, deleteJob } from '../controllers/jobs.js'

const router = express.Router();

import auth from '../middleware/auth.js';

router.get('/', getJobs);
router.post('/', auth, createJob);
router.patch('/:id', auth, updateJob);
router.delete('/:id', auth, deleteJob);

export default router;