import React from "react";

export default function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span>
        {task.title} <span>[{task.category}]</span>
      </span>
      <div>
        <button onClick={() => deleteTask(task.id)} className="btn red">
          Delete
        </button>
      </div>
    </div>
  );
}
