const mongoose = require('mongoose');
const goalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{collection: 'goals' 
});
const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;
const connectDB = require('../config/database');
const express = require('express');
const router = express.Router();
const Goal = require('../models/goals');

