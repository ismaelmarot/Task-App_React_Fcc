import React , { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../style/css/taskForm.css';

function TaskForm(props){

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleShipping = e => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: input,
      comleted: false
    }

    props.onSubmit(newTask);
  }

  return(
    <form 
      className='task-form'
      onSubmit={handleShipping}>
      <input 
        className='task-input' 
        type='text' 
        placeholder='Indicates a task' 
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>
        Add
      </button>
    </form>
  );
}

export default TaskForm;