import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateTask, toggleComplete }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          updateTask={updateTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
