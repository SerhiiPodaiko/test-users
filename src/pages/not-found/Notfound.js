import {useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import "./NotFound.scss"
import NotFoundImg from "../../assets/404.png"

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const clear = setTimeout(() => navigate("/"), 5000)

        return () => clearTimeout(clear)
    }, []);

    return (
        <div className="not-found">
            <Link to="/" className="not-found-btn">Back to home</Link>
            <img src={NotFoundImg} className="not-found-img" alt="not-found"/>
        </div>
    )
}

export default NotFound
