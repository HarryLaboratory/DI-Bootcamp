import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;
