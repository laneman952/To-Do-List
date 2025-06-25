import { useState } from 'react';

function TodoInput({onAdd}) {
    const [todo, setTodo] = useState('');

    return (
        <div className="todo-input">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && todo.trim()) {
                        if (todo.trim()) {
                            onAdd(todo);
                            setTodo('');
                        }
                    }
                }}
                placeholder="Add a new todo"
            />
            <button
                onClick={() => {
                    if (todo.trim()) {
                        onAdd(todo);
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