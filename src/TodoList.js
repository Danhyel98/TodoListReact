import React from "react";

export default function TodoList({ todos, onToggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onToggleTodo(index)}
          />{" "}
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
