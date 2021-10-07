import Button from './Button'

const Header = ({toggleAdd, seeAddTask}) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {!seeAddTask ? 
            <Button text='ADD' color='green' onClick={toggleAdd}/>
:<Button text='CLOSE' color='red' onClick={toggleAdd}/> }
            </header>

    )
}

export default Header
