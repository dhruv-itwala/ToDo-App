import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useEffect, useState } from "react";
import axios from "axios";
import NoRecord from "./assets/NoRecord.svg";

// Define backend URL
const backendUrl = "https://todo-app-1yuz.onrender.com";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // Function to handle deletion of an item
  const handleDeleteItem = (id) => {
    console.log(`Deleting item with ID: ${id}`);
    axios
      .delete(`${backendUrl}/delete/${id}`)
      .then(() => getAllList())
      .catch((err) => console.log("Error deleting todo:", err));
  };

  // Function to handle adding a new item
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    getAllList(); // Refresh the list after adding
  };

  // Function to fetch all todo items from the backend
  const getAllList = () => {
    axios
      .get(`${backendUrl}/get`)
      .then((result) => {
        const data = Array.isArray(result.data) ? result.data : []; // Ensure data is an array
        setTodoItems(data);
      })
      .catch((err) => console.log("Error fetching todos:", err));
  };

  // Fetch todo items when the component mounts
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
