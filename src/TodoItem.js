import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{todo}</span>
    </div>
  );
};

export default TodoItem;
