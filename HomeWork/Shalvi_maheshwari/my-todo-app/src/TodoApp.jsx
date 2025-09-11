import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]); // array of tasks
  const [newTask, setNewTask] = useState(""); // input value

  //task add karo
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask(""); // clear input
  };

  //task ka khatma
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //task dhokha khane ke baad update hoga 
  const handleUpdateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  // TOGGLE COMPLETE
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My To-Do App</h1>

      {/* Input + Add Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-100 p-2 rounded"
          >
            {/* Task Text with Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleUpdateTask(task.id, e.target.textContent)}
                className={`${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
