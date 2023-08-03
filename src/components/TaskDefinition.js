import React, { useState, useEffect } from "react";

export default function TaskDefinition({
  addTodo,
  editTodo,
  editTask,
  setEditTask,
}) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (editTask) {
      setTask(editTask.text);
      setDueDate(editTask.dueDate);
      setCategory(editTask.category);
      setHighlight(true);
    } else {
      setTask("");
      setDueDate("");
      setCategory("");
      setHighlight(false);
    }
  }, [editTask]);

  const handleAddTodo = () => {
    if (!task.trim() || !dueDate.trim() || !category.trim()) {
      alert("All fields are required!");
      return;
    }

    const today = new Date();
    const selectedDueDate = new Date(dueDate);

    if (selectedDueDate < today) {
      alert("Due date should not be before tomorrow!");
      return;
    }

    if (editTask) {
      editTodo(editTask.id, task, dueDate, category);
      setEditTask(null);
      setHighlight(false);
    } else {
      addTodo({
        id: Date.now(),
        text: task,
        dueDate,
        completed: false,
        category,
      });
    }
    setTask("");
    setDueDate("");
    setCategory("");
  };

  return (
    <div className={`defining-container ${highlight ? "highlight" : ""}`}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled hidden>
          Choose category
        </option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button onClick={handleAddTodo}>{editTask ? "Edit" : "Add"}</button>
    </div>
  );
}
