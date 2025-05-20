var express = require('express');
const route = require('.');
var router = express.Router();

let goals = [];

router.get('/getGoals', function(req, res, next) {
    res.json(goals);
}
);
router.delete('/removeGoal/:id', function(req, res, next) {
    const goalId = parseInt(req.params.id);
    goals = goals.filter(goal => goal.id !== goalId);
    res.json({ message: 'Goal deleted successfully' });
}
);
router.post('/addGoal', function(req, res, next) {
    const newGoal = {
        id: goals.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    goals.push(newGoal);
    res.json({ message: 'Goal added successfully', goal: newGoal });
}
);
module.exports = router;