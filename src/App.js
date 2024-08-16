import React, { useState, useEffect } from 'react';
import Form from './form';
import TodoList from './TodoList';

const LSKEY = "MyTodoApp";

function App() {
  // Initialize the state with an empty array
  const [todos, setTodos] = useState([]);

  // Retrieve todos from localStorage when the component first renders
  useEffect(() => {
    const savedTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []); // Empty dependency array ensures this runs only on the first render

  // Save todos to localStorage when todos state changes
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

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
