import propTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
    return (
        <button style={{backgroundColor:color}} onClick={onClick} className='btn'>{text}</button>
    )
}

export default Button

Button.defaultProps = {
    color: 'blue'
}

Button.propTypes = {
    onClick: propTypes.func,
}