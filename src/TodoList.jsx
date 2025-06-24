import TodoItem from './TodoItem';

function TodoList({ todos, onDragStart, onDrop }) {
    return (
        <div>
            {todos.map((task, index) =>(
                <TodoItem 
                    key={index} 
                    text={task} 
                    index={index} 
                    onDragStart={onDragStart} 
                    onDrop={onDrop}
                />
            ))}
        </div>
    );
}

export default TodoList;