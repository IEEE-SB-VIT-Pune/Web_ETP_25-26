import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Academics");
  const [completed, setCompleted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return; // If title is empty

    addTask({ title, category, completed });
    setTitle("");
    setCompleted(false);
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter task"
      />
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Academics</option>
        <option>Day to Day Life</option>
        <option>Others</option>
      </select>
      <button type="submit" className="btn green">
        Add
      </button>
    </form>
  );
}
