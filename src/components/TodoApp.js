
import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp()
{
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => 
    {
        if(task.trim() === "")
    {
          alert("please enter a todo");
          return;
    }
       const newTodo ={
        id : Date.now(),
        title : task,
        completed : false,
       };
       setTodos([...todos, newTodo]);
       setTask("");
       alert("todo added sucessfully");
    };

   const toggleComplete = (id) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );

  setTodos(updatedTodos);
};
    return (
        <div className="todo-container">
      <h2>📝 To-Do Application</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;