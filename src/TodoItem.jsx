import { useState } from 'react';

function TodoItem({ text, index, onDragStart }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div className="todo-item" draggable="true" onDragStart={() => onDragStart(index)}>
        <label className="custom-checkbox">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={() => setIsChecked(!isChecked)} 
        />
        <span className="checkmark"></span>
        </label>
        <span>{text}</span>
      </div>
    );
}

export default TodoItem;