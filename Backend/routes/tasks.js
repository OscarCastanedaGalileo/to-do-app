var express = require('express');
const  route  = require('.');
var router = express.Router();
const Task = require('../models/tasks');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

/*let tasks = [
    {
        id: 1,
        name: 'Task 1',
        description: 'Description for Task 1'
    },
    {
        id: 2,
        name: 'Task 2',
        description: 'Description for Task 2'
    },
    {
        id: 3,
        name: 'Task 3',
        description: 'Description for Task 3'
    }
]*/
router.get('/getTasks', async function(req, res) {
    try {
        const tasks = await Task.find(); 
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

router.delete('/removeTask/:id', async function(req, res ) {
    const { id } = req.params;
    try {
        const taskId = mongoose.Types.ObjectId(id);
        const result = await Task.findByIdAndDelete(taskId);
        if (!result) {
            return res.status(400).json({ message: 'Invalid Task ID' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/addTask', function(req, res) {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    const newTask = new Task({
        name: name,
        description: description
    });
    newTask.save()
        .then(task => {
            res.status(200).json({ message: 'Task added successfully', task });
        })
        .catch(error => {
            console.error('Error adding task:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

module.exports = router;