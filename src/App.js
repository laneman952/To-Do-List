import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
   setTodos([...todos, newTodo]);
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
