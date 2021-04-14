import { React, useState } from 'react';
import {v4 as uuid} from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    setTodos(todos.map((todo)=>{
      todo.id === id ? todo.isComplete = !todo.isComplete : todo.isComplete = todo.isComplete;
      return todo;
    }));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo)=>{
      return todo.id !== id; 
    }));
  }

  const addTodo = (text) => {
    const newTodo={
      id: uuid(),
      title: text,
      isComplete: false
    }
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
