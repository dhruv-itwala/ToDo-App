import style from "./TodoItem.module.css";

function TodoItem({ TodoName, TodoDate, onDeleteClick, id }) {
  const formattedDate = new Date(TodoDate).toISOString().split("T")[0];

  return (
    <tr className={style.container}>
      <td className={style.todoName}>{TodoName}</td>
      <td className={style.todoDate}>{formattedDate}</td>
      <td>
        <button className={style.deletebtn} onClick={() => onDeleteClick(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
