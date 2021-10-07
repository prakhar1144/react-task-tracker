import {useState} from 'react'

const AddTask = ({onSave}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const Submit = (e) => {
        e.preventDefault()

        if(text=='') {
            alert("Please Enter Some Text")
            return
        }

        onSave({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={Submit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' value={day} onChange={(e) => setDay(e.target.value)}placeholder='Add Day & Time' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(!reminder)}/>
            </div>    
            <input type='submit' value='Save Task' className='btn btn-block'></input>      
        </form>
 
    )
}

export default AddTask
