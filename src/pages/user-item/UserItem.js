import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./UserItem.scss"
import Button from "../../ui/button/Button"
import Modal from "../../ui/modal/Modal"
import UserAlbums from "../../components/albums/UserAlbums"

const UserItem = ({user}) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const onUserClickPosts = (id) => {
        navigate(`/user-posts/${id}`, {state: {user}})
    }

    return (
        <div className="user-item">
            <span><strong>Name:</strong> {user.name}</span>
            <span><strong>E-mail:</strong> {user.email}</span>
            <span><strong>Phone:</strong> {user.phone}</span>
            <span><strong>Website:</strong> {user.website}</span>
            <div className="btn-wrap">
                <Button
                    type="button"
                    color="default"
                    onClick={() => onUserClickPosts(user.id)}>
                    Posts
                </Button>
                <Button
                    type="button"
                    color="success"
                    onClick={() => setOpen(true)}>
                    Albums
                </Button>
            </div>
            <Modal title="Albums" open={open} onClose={() => setOpen(false)}>
                <UserAlbums userId={user.id}/>
            </Modal>
        </div>
    )
}

export default UserItem


