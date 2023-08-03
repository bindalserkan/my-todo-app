import React, { useState } from "react";
import "./TodoApp.css";
import TaskDefinition from "./components/TaskDefinition";
import TaskList from "./components/TaskList";
import InfoCard from "./components/InfoCard";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState(null);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function completeTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, newText, newDueDate, newCategory) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText,
              dueDate: newDueDate,
              category: newCategory,
            }
          : todo
      )
    );
  }

  function clearAllTodos() {
    setTodos([]);
  }

  function handleSetEditTask(task) {
    setEditTask(task);
  }

  return (
    <div className="container">
      <h1>Let's Organize Yourself</h1>
      <TaskDefinition
        addTodo={addTodo}
        editTodo={editTodo}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <TaskList
        todos={todos}
        completeTodo={completeTodo}
        editTodo={setEditTask}
        deleteTodo={deleteTodo}
        clearAllTodos={clearAllTodos}
        setEditTask={handleSetEditTask}
      />
      <InfoCard />
    </div>
  );
}
