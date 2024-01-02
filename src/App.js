import './App.css';
import { useState } from 'react';
import { useRef } from "react";
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: 'Task 1', completed: false },
    { id: uuidv4(), name: 'Task 2', completed: false },
    { id: uuidv4(), name: 'Task 3', completed: false }
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if(name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed =  !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1 className='title'>Todo List</h1>
      <div className='task-list'>
        <TodoList className='tasks' todos={todos} toggleTodo={toggleTodo} />
      </div>
      <input className='input-area' type='text' ref={todoNameRef} />
      <div className='btn-area'>
        <button className='btn btn-add' onClick={handleAddTodo}>Add Task</button>
        <button className='btn btn-rem' onClick={handleClear}>Remove Task</button>
      </div>
      <div className='left-tasks'>Left tasks: {todos.filter((todo) => !todo.completed).length}</div>
      <footer className='footer'>Created by <a href='https://manapuraza.com' target='_blank' rel='noopener noreferrer'>ManatoYamashita</a></footer>
    </div>
  );
}

export default App;
