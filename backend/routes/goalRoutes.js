import express from 'express';
import { getGoals, fetchGoal, createGoal, deleteGoal } from '../controllers/goalController.js';

const router = express.Router()

router.get('/', getGoals)
router.post('/', fetchGoal)
router.put('/:id', createGoal)
router.delete('/:id', deleteGoal)

export default router