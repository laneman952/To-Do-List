import TodoItem from './TodoItem';

function TodoList({ todos, onDragStart, onDrop, onUpdate, onDelete }) {
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
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;