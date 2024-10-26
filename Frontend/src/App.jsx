import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useEffect, useState } from "react";
import axios from "axios";
import NoRecord from "./assets/NoRecord.svg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleDeleteItem = (id) => {
    console.log(`Deleting item with ID: ${id}`); // Log the ID for debugging

    axios
      .delete(`https://todo-app-1yuz.onrender.com/delete/${id}`)
      .then(() => {
        getAllList();
      })
      .catch((err) => console.log("Error deleting todo:", err));
  };

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const getAllList = () => {
    axios
      .get("https://todo-app-1yuz.onrender.com/get")
      .then((result) => setTodoItems(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <div className="container">
      <AppName />
      <div className="todo-container">
        <div className="add-todo">
          <AddTodo onNewItem={handleNewItem} getAllList={getAllList} />
        </div>
        {todoItems.length === 0 ? (
          <div className="no-tasks-message">
            <img
              className="no-record"
              src={NoRecord}
              alt="No Tasks Available"
            />
            <h2>No Tasks Available</h2>
          </div>
        ) : (
          <table className="todo-items">
            <thead>
              <tr>
                <th>Task</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <TodoItems
                todoItems={todoItems}
                onDeleteClick={handleDeleteItem}
              />
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
