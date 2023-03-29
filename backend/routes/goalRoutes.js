import express from 'express';
import { getGoals, setGoal, updateGoal, deleteGoal } from '../controllers/goalController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

// This syntax is the same as: router.get('/', getGoals) and router.post('/', setGoal)
router.route('/').get(protect, getGoals).post(protect, setGoal);

// This syntax is the same as: router.put('/:id', createGoal) and router.delete('/:id', deleteGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

export default router;
