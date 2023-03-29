import express from 'express';
import { getGoals, setGoal, createGoal, deleteGoal } from '../controllers/goalController.js';

const router = express.Router()

// This syntax is the same as: router.get('/', getGoals) and router.post('/', setGoal)
router.route('/').get(getGoals).post(setGoal)

// This syntax is the same as: router.put('/:id', createGoal) and router.delete('/:id', deleteGoal)
router.route('/:id').put(createGoal).delete(deleteGoal)

export default router