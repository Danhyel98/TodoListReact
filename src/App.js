import React, { useState } from 'react';
import Form from './form';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { text: "My first todo", isCompleted: false },
    { text: "My second todo", isCompleted: false },
  ]);

  const addTodo = (todoText) => {
    const newTodos = [...todos, { text: todoText, isCompleted: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <Form onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
