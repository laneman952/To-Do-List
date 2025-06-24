import TodoItem from './TodoItem';

function TodoList({ todos }) {
    return (
        <div>
            {todos.map((task, index) =>(
                <TodoItem 
                    key={index} 
                    text={task} 
                    index={index} 
                    onDragStart={onDragStart} 
                />
            ))}
        </div>
    );
}

export default TodoList;