import { useState } from 'react';

function TodoItem({ text, index, onDragStart, onDrop, onUpdate, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

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
        <span className="checkmark"></span>
        </label>
        {isEditing ? (
            <input
              type="text"
              value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onUpdate(index, editedText);
                        setIsEditing(false);
                    }
                }}
            />
        ) : (
        <span>{text}</span>
        )}
          
          <div className="menu-wrapper">
            <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ...
            </button>
            
            {isMenuOpen && (
              <div className="dropdown-menu">
                    <button onClick={() => {
                        setIsEditing(true);
                        setIsMenuOpen(false);
                    }}>
                        Edit
                    </button>
                    <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            )}
          </div>
      </div>
    );
}

export default TodoItem;