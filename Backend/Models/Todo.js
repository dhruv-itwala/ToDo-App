const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const TodoModel = mongoose.model("Todos", TodoSchema);

module.exports = TodoModel;
