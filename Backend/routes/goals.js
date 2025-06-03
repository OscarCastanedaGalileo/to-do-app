var express = require('express');
const route = require('.');
var router = express.Router();
//const Goal = require('../models/goals');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


router.get('/getGoals', async function(req, res) {
   try {    
        const goals = await Goal.find(); 
        res.status(200).json(goals);
    }
    catch (error) {
        console.error('Error fetching goals:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
);
router.delete('/removeGoal/:id', async function(req, res) {
   try {
        const { id } = req.params;
        const goalId = mongoose.Types.ObjectId(id);
        const result = await Goal.findByIdAndDelete(goalId);
        if (!result) {
            return res.status(400).json({ message: 'Invalid Goal ID' });
        }
        res.status(200).json({ message: 'Goal deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting goal:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
);
router.post('/addGoal', async function(req, res) {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    try {
        const newGoal = await Goal.create({
            name: name,
            description: description
        });
        res.status(200).json({message: 'Goal added successfully', goal: newGoal });
} catch (error) {
        console.error('Error adding goal:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
);
module.exports = router;