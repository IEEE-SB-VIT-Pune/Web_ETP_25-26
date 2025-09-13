import React, { useState } from "react";

function TaskItem({ task, deleteTask, updateTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <>
          <input 
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span 
            style={{ 
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }} 
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
