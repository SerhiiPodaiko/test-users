import Proptypes from "prop-types"
import "./Button.scss"

const Button = ({ children, onClick, color, type, }) => {
    return (
        <button className={`btn ${color}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button

Button.propTypes = {
    color: Proptypes.string,
    type: Proptypes.string,
    onClick: Proptypes.func,
    children: Proptypes.string.isRequired
}

