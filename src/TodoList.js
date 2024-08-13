import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = ['Learn React', 'Build a project', 'Deploy on Netlify'];

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
