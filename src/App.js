
import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <InputField />
      <SubmitButton />
      <TodoList />
    </div>
  );
}

export default App;
