
import { useRef, useState } from 'react';
import './Todo.css';

function TodoItem({no,text}){
 
  
  return (
 <div >
  <div className='todo-text'>{text}</div>

 </div>
  
  );
}


export default TodoItem;
