import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask  from './components/AddTask';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      'id': 1,
      'text': 'Task number 1',
      'day':'10-10:2021',
      'reminder':true
    },
    {
      'id': 2,
      'text': 'Task number 2',
      'day':'07-10:2021',
      'reminder':true   
    },
    {
      'id': 3,
      'text': 'Task number 3',
      'day':'15-10:2021',
      'reminder': false  
    }
  ])
  const [seeAddTask, setseeAddTask] = useState(false)
  const toggleAdd = () => {
    setseeAddTask(!seeAddTask)
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id===id ?  {...task, reminder: !task.reminder} : task))
  }
  const addTask = (task) => {
    console.log(task)
    const id = Math.random(Math.random()*1000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    setseeAddTask(false)
  }
  return (
    <div className="container">
      <Header toggleAdd={toggleAdd} seeAddTask={seeAddTask}/>
      { seeAddTask && <AddTask onSave={addTask} />}
      <Tasks toggleReminder={toggleReminder} tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
