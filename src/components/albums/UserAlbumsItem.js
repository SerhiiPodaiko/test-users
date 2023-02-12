import Proptypes from "prop-types"

const UserAlbumsItem = ({album}) => (
    <div className="user-albums-item">
        <strong>{album.title}</strong>
    </div>
)

export default UserAlbumsItem

UserAlbumsItem.propTypes = {
    album: Proptypes.object.isRequired
}
