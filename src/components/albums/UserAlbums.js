import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import Proptypes from "prop-types"
import "./UserAlbums.scss"
import Preloader from "../../ui/preloader/Peloader"
import Alert from "../../ui/alert/Alert"
import {fetchGetAllAlbumsUser} from "../../store/slices/albumsSlice"
import UserAlbumsItem from "./UserAlbumsItem"

const UserAlbums = ({userId}) => {
    const {albums, loading, error} = useSelector(state => state.albums)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(fetchGetAllAlbumsUser(userId))
        }
    }, [dispatch, userId])

    return (
        <div className="user-albums">
            {error && <Alert type="error">{error}</Alert>}
            {loading ? <Preloader/> :
                albums?.map(album =>
                    <UserAlbumsItem key={album.id} album={album}/>)
            }
        </div>
    )
}

export default UserAlbums

UserAlbums.propTypes = {
    userId: Proptypes.number.isRequired
}
