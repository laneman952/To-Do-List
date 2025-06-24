import { useState } from 'react';

function TodoItem({ text, index, onDragStart, onDrop }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div 
        className="todo-item" 
        draggable="true" 
        onDragStart={() => onDragStart(index)} 
        onDrop={() => onDrop(index)} 
        onDragOver={(e) => e.preventDefault()}>
        <label className="custom-checkbox">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={() => setIsChecked(!isChecked)} 
        />
          <div className="menu-wrapper">
            <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>

            </button>

            {isMenuOpen && (
              <div className="dropdown-menu">
                    <button>Edit</button>
                    <button>Delete</button>
              </div>
            )}
          </div>
        <span className="checkmark"></span>
        </label>
        <span>{text}</span>
      </div>
    );
}

export default TodoItem;