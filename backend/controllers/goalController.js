// @desc Fetch all goals
export const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Fetch single goal
export const fetchGoal = (req, res) => {
    res.status(200).json({message: 'Set goals'})
}

// @desc Create a goal
export const createGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc Delete a goal
export const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

export default {
    getGoals,
    fetchGoal
}