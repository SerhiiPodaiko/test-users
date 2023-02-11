import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import "./UserList.scss"
import {fetchGetAllUsers} from "../../store/slices/usersSlice"
import UserItem from "../user-item/UserItem"
import Alert from "../../ui/alert/Alert"
import Preloader from "../../ui/preloader/Peloader"

const UserList = () => {
    const {users, loading, error} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGetAllUsers())
    }, [dispatch])

    return (
        <div className="user-list">
            {error && <Alert type="error">{error}</Alert>}
            {
                loading ? <Preloader/> :
                    users?.map(user => <UserItem key={user.id} user={user}/>)
            }
        </div>
    )
}

export default UserList
