import React, { useEffect, useRef, useState } from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const newTodo = {
      no: todos.length + 1, // Use the length of todos array as an incrementing id
      text: inputRef.current.value,
      display: ''
    };

    setTodos([...todos, newTodo]);
    inputRef.current.value = ''; // Reset input field
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='Todo'>
      <div className='todo-header'>ToDoList</div>
      <div className='todo-add'>
        <input ref={inputRef} type='text' placeholder='Add Task' className='todo-input' />
        <div onClick={addTodo} className='todo-add-btn'>ADD</div>
      </div>

      <div className='todo-list'>
        {todos.map((item, index) => (
          <TodoItem key={index} no={item.no} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
