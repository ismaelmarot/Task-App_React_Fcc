import React , { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../style/css/taskList.css';

function TasksList(){

  const [tasks , setTasks] = useState([]);

  const addTask = task => {
    if(task.text.trim()){
      task.text = task.text.trim();
      const taskListUpdates = [task,...tasks];
      setTasks(taskListUpdates);
    }
  }

  const deleteTask = id => {
    const tasksListUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksListUpdated);
  }

  const completedTask = id => {
    const taskListUpdates = tasks.map(task => {
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(taskListUpdates);
  }

  return(
    <>
      <TaskForm onSubmit={addTask} />
      <div className='tasks-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id} 
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          )
        }
      </div>
    </>
  );
}

export default TasksList;