import TodoItem from './TodoItem';

function TodoList({ todos, onDragStart, onDrop, onUpdate }) {
    return (
        <div>
            {todos.map((task, index) =>(
                <TodoItem 
                    key={index} 
                    text={task} 
                    index={index} 
                    onDragStart={onDragStart} 
                    onDrop={onDrop}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
}

export default TodoList;