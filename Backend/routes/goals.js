var express = require('express');
const route = require('.');
var router = express.Router();

let goals = [];

router.get('/getGoals', function(req, res, next) {
   res.status(200).json(goals);
}
);
router.delete('/removeGoal/:id', function(req, res, next) {
    const goalId = parseInt(req.params.id);
    if (!goalId || isNaN(goalId)) {
        return res.status(400).json({ message: 'Invalid goal ID' });
    }
    const originalLength = goals.length;
    goals = goals.filter(goal => goal.id !== goalId);
    if (goals.length === originalLength) {
        return res.status(404).json({ message: 'Goal not found' });
    }
    res.status(200).json({ message: 'Goal deleted successfully' });
}
);
router.post('/addGoal', function(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    const newGoal = {
        id: goals.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    goals.push(newGoal);
    res.status(200).json({ message: 'Goal added successfully', goal: newGoal });
}
);
module.exports = router;