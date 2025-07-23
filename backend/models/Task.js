const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  completed: { type: Boolean, default: false },  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Task", TaskSchema);
