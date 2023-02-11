import Proptypes from "prop-types"
import "./Alert.scss"

const Alert = ({ children, type }) => {
    return (
        <div className={`alert ${type}`}>
            {children}
        </div>
    )
}

export default Alert

Alert.propTypes = {
    children: Proptypes.string.isRequired,
    type: Proptypes.string
}
