import Task from './Task'

const Tasks = ({tasks, deleteTask, toggleReminder}) => {
    return (
        <div>
            {tasks.map((task) => <Task toggleReminder={toggleReminder} deleteTask={deleteTask} key={task.id} task={task}/>)}
        </div>
    )
}

export default Tasks
