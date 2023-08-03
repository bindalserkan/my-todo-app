import React from "react";
import EditIcon from "../icons/marker-solid.svg";
import DeleteIcon from "../icons/trash-solid.svg";
import TaskIcon from "../icons/thumbtack-solid.svg";

export default function TaskList({
  todos,
  completeTodo,
  deleteTodo,
  clearAllTodos,
  setEditTask,
}) {
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
    <div className="category-list">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""} ${
            todo.category
          }`}
        >
          <img src={TaskIcon} alt="task icon" className="task-icon" />
          <span className="todo-text" onClick={() => completeTodo(todo.id)}>
            {capitalizeFirstLetter(todo.text)}{" "}
            <span style={{ color: "red" }}>
              ({new Date(todo.dueDate).toLocaleDateString()})
            </span>
          </span>
          <img
            src={EditIcon}
            alt="edit icon"
            className="edit-icon"
            onClick={() => setEditTask(todo)}
          />

          <img
            src={DeleteIcon}
            alt="delete icon"
            className="delete-icon"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      ))}
      {todos.length > 0 && (
        <div className="center-content">
          <button className="clear-all-button" onClick={clearAllTodos}>
            Clear All Tasks
          </button>
          <p>
            <i>Hint: For completed tasks, you can click on them to deactivate.</i>
          </p>
        </div>
      )}
    </div>
  );
}
