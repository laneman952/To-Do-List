import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";
import bg from './assets/Todo-List-image.png'


function App() {
  const [todos, setTodos] = useState([]);
  const [draggedTodoIndex, setDraggedTodoIndex] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newTodo) {
   setTodos([...todos, newTodo]);
  }

  function updateTodo(index, newText) {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  function handleDragStart(index) {
    setDraggedTodoIndex(index);
  }

  function handleDrop(index) {
    if (draggedTodoIndex !== null && draggedTodoIndex !== index) {
      const updatedTodos = [...todos];
      const [movedTodo] = updatedTodos.splice(draggedTodoIndex, 1);
      updatedTodos.splice(index, 0, movedTodo);
      setTodos(updatedTodos);
    }
    setDraggedTodoIndex(null);
  }

  return (
    <div className="App">
      <img src={bg} alt="Background" className="background-image" />
      <div className="overlay">
        <h1>To-Do List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList 
          todos={todos} 
          onDragStart={handleDragStart} 
          onDrop={handleDrop} 
          onUpdate={updateTodo} 
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
