import React, { useRef } from "react";

export default function Form({ onAddTodo }) {
  const inputRef = useRef();

  const clickHandler = () => {
    const inputElement = inputRef.current;
    const todoText = inputElement.value;

    if (todoText.trim()) {
      onAddTodo(todoText);  
      inputElement.value = "";  
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}
