require("dotenv").config({ path: "./config.env" }); // Load environment variables at the top
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");
const app = express();
const mongoURI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

console.log("MongoDB URI:", mongoURI); // Debugging line to confirm env variable

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/add", (req, res) => {
  const todoName = req.body.todoName;
  const dueDate = req.body.dueDate;

  TodoModel.create({
    todoName: todoName,
    dueDate: dueDate,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the request parameters
    const deletedTodo = await TodoModel.findByIdAndDelete(id); // Find and delete the todo item by ID

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" }); // If no item is found, return 404
    }
    res.status(200).json({ message: "Todo deleted successfully" }); // Success response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting todo" }); // Error handling
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
