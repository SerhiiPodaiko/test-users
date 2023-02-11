import {Link} from "react-router-dom"
import "./NavBar.scss"

const NavBar = () => (
    <header className="navbar">
        <div className="container">
            <Link to="/" className="navbar-title">Users</Link>
        </div>
    </header>
)

export default NavBar
