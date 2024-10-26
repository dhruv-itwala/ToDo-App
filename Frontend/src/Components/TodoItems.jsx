import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item._id}
          TodoName={item.todoName}
          TodoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
          id={item._id}
        />
      ))}
    </>
  );
};

export default TodoItems;
