import TodoItem from './TodoItem';

function TodoList({ todos }) {
    return (
        <div>
            {todos.map((task, index) =>(
                <TodoItem key={index} text={task} />
            ))}
        </div>
    );
}

export default TodoList;