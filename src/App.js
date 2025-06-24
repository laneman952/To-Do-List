import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";
import bg from './assets/Todo-List-image.png'


function App() {
  const [todos, setTodos] = useState([]);
  const [draggedTodoIndex, setDraggedTodoIndex] = useState(null);

  function addTodo(newTodo) {
   setTodos([...todos, newTodo]);
  }

  function handleDragStart(index) {
    setDraggedTodoIndex(index);
  }

  return (
    <div className="App">
      <img src={bg} alt="Background" className="background-image" />
      <div className="overlay">
        <h1>To-Do List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onDragStart={handleDragStart} />
      </div>
    </div>
  );
}

export default App;
