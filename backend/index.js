const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const app = express();
app.use(cors());
app.use(express.json());
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
