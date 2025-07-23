const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.patch("/:id/toggle", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get('/', async (req, res) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  try {
    let tasks = await Task.find();
    tasks.sort((a, b) => {
      // Sort by completed first (incomplete first), then priority, then createdAt
      if (a.completed !== b.completed) {
        return a.completed - b.completed;
      }

      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }

      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;