import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleClick = () => {
    const task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      name: newTask,
      completed: false
    }
    setTasks([...tasks, task]);
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDelBtn = (id) => {
    // const newArr = [...tasks];
    // const index = newArr.indexOf(task);
    // newArr.splice(index, 1);
    // setTasks(newArr);

    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleStatusBtn = (id) => {
    setTasks(tasks.map(task => {
      if (task.id == id) {
        return {...task, completed: true};
      }
      else {
        return task;
      }
    }));
  };

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <div className="app">
      <div className="add-tasks-box">
        <input onChange={handleChange} placeholder='Task Name' type="text" className='input-box'/>
        <button onClick={handleClick} className='add-task btn'>Add Task</button>
      </div>
      <h2 className='list-title'>Tasks</h2>
      <div className="list">
        { 
          tasks.map((task, key) => {
            return (
              <div className="task" key={key}>
                <div className='task-title-box'>
                  <span className={`status ${task.completed ? "complete" : "incomplete"}`}> { task.completed ? "Completed" : "Incomplete" }</span>
                  <h3 className="task-title"> {task.name} </h3>
                </div>
                
                <div className="task-btn-box">
                  {
                    task.completed 
                    ? <></> 
                    : <button onClick={() => handleStatusBtn(task.id)} className="status btn">Completed</button>
                  }
                  <button onClick={() => handleDelBtn(task.id)} className="del-task btn">Delete Task</button>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default App
