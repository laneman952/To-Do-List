import { useState } from "react";
import TodoInput from "./TodoInput";


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
   setTodos([...todos, newTodo]);
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoInput />
    </div>
  );
}

export default App;
