import { useState } from "react";
import style from "./AddTodo.module.css";
import axios from "axios";

function AddTodo({ onNewItem, getAllList }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    const newTodo = {
      todoName,
      dueDate,
    };

    if (todoName && dueDate) {
      axios
        .post("http://localhost:3001/add", newTodo)
        .then((result) => {
          setTodoName("");
          setDueDate("");
          getAllList();
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="add-todo">
      <input
        className={style.input}
        type="text"
        placeholder="Enter Todo Here"
        value={todoName}
        onChange={handleNameChange}
      />
      <input
        className={style.input}
        type="date"
        value={dueDate}
        onChange={handleDateChange}
      />
      <button
        type="button"
        className={style.btn}
        onClick={handleAddButtonClick}
      >
        Add Item
      </button>
    </div>
  );
}

export default AddTodo;
