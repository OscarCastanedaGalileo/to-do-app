const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, { collection: 'tasks'
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
           