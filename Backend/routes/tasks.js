var express = require('express');
const  route  = require('.');
var router = express.Router();

let tasks = [
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
]
router.get('/getTasks', function(req, res, next) {

    res.status(200).json(tasks);
})

router.delete('/removeTask/:id', function(req, res, next) {
    const taskId = parseInt(req.params.id);
    if (!taskId || isNaN(taskId)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }
    const originalLength = tasks.length;
    tasks = tasks.filter(task => task.id !== taskId);
    if (tasks.length === originalLength) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
});

router.post('/addTask', function(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    tasks.push(newTask);
    res.status(200).json({ message: 'Task added successfully', task: newTask });
});

module.exports = router;