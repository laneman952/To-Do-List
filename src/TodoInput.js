import { useState } from 'react';

function TodoInput() {
    const [todo, setTodo] = useState('');

    return (
        <div className="todo-input">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button
                onClick={() => {
                    if (todo.trim()) {
                        console.log('New Todo:', todo);
                        setTodo('');
                    }
                }}
            >
                Add Todo
            </button>
        </div>
    );
}

export default TodoInput;