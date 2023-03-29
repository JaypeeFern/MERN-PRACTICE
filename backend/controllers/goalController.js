// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Set goal
// @route POST /api/goals
// @access Private
export const setGoal = (req, res) => {
    res.status(200).json({message: 'Set goals'})
}

// @desc Create goal
// @route PUT /api/goals/:id
// @access Private
export const createGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}