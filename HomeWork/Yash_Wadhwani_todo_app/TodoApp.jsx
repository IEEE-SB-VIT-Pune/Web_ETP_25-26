import React, { useState } from 'react';
import './TodoApp.css'; // The same CSS file works perfectly

// FIX: Added the 'function' keyword here.
function TodoApp() {
  // --- STATE MANAGEMENT ---
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a CRUD App' }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  
  const [editingId, setEditingId] = useState(null);
  
  const [editingText, setEditingText] = useState('');

  // --- CRUD LOGIC ---

  // CREATE: Adds a new to-do to the list.
  const handleCreate = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue(''); // Clear the input box after adding
  };

  // DELETE: Removes a to-do from the list.
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // UPDATE (Step 1): When the user clicks "Edit", this runs.
  const handleStartEdit = (todo) => {
    setEditingId(todo.id); // Remember which ID we are editing
    setEditingText(todo.text); // Fill the edit box with the current text
  };

  // UPDATE (Step 2): When the user clicks "Save", this runs.
  const handleUpdate = (todo) => {
    e.preventDefault();
    setTodos(...todo,todo.text=editingText);
    setEditingId(null); // We are done editing
    setEditingText('');
  };

  // --- UI (The part that gets rendered) ---
  return (
    <div className="todo-app">
      <h1>Simple To-Do List</h1>

      {/* CREATE FORM */}
      <form onSubmit={handleCreate} className="add-form">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      {/* READ (Display the list) */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            
            {/* DYNAMIC RENDERING: Show either the edit form or the normal view */}
            {editingId === todo.id ? (
              // UPDATE FORM
              <form onSubmit={handleUpdate} className="edit-form">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              // Normal View (Read and Delete)
              <>
                <span>{todo.text}</span>
                <div className="buttons">
                  <button onClick={() => handleStartEdit(todo)}>Edit</button>
                  <button onClick={() => handleDelete(todo.id)} className="delete">Delete</button>
                </div>
              </>
            )}
            
          </li>
        ))}
      </ul>
    </div>
  );
} // <-- FIX: Added the missing closing curly brace for the function here.

export default TodoApp;