import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  // Add new task
  function addTask(task) {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  }

  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // I thought about puting this function in TaskList element
  // but scince every function releted to TaskItem is here I put it here ()
  // Reason for all the function to be here is that state needs to be change when add,
  // delete or filter tasks
  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Filter tasks
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.category === filter);

  return (
    <div className="container">
      <h1 className="title">React To-Do App</h1>
      <Navbar setFilter={setFilter} />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}
