import { useState } from 'react';

function TodoItem({ text }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div className="todo-item">
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