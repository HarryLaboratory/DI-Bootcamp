const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const tasksFilePath = path.join(__dirname, '../tasks.json');

// To read the tasks from the JSON file
const readTasksFromFile = () => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading tasks file:', err);
        return [];
    }
};

// To write tasks to the JSON file
const writeTasksToFile = (tasks) => {
    try {
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    } catch (err) {
        console.error('Error writing to tasks file:', err);
    }
};

// 1. GET /tasks: 
router.get('/', (req, res) => {
    const tasks = readTasksFromFile();
    res.status(200).json(tasks);
});

// 2. GET /tasks/:id:
router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const tasks = readTasksFromFile();
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// 3. POST /tasks: 
router.post('/', (req, res) => {
    const { title, description } = req.body;

    // To Validate input
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const tasks = readTasksFromFile();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, 
        title,
        description,
        completed: false,
    };

    tasks.push(newTask);
    writeTasksToFile(tasks);
    res.status(201).json(newTask);
});

// 4. PUT /tasks/:id: 
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, completed } = req.body;

    // To Validate input
    if (title === undefined && description === undefined && completed === undefined) {
        return res.status(400).json({ message: 'At least one field (title, description, or completed) must be provided' });
    }

    const tasks = readTasksFromFile();
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const updatedTask = { ...tasks[taskIndex], title, description, completed };
    tasks[taskIndex] = updatedTask;

    writeTasksToFile(tasks);
    res.status(200).json(updatedTask);
});

// 5. DELETE /tasks/:id: 
router.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const tasks = readTasksFromFile();
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(taskIndex, 1); // Remove the task
    writeTasksToFile(tasks);
    res.status(200).json({ message: 'Task deleted successfully' });
});

module.exports = router;
