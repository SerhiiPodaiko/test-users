import {useEffect} from "react"
import {useLocation, Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import "./UserPosts.scss"
import {fetchGetAllPostsUser} from "../../store/slices/postsSlice"
import Preloader from "../../ui/preloader/Peloader"
import UserPostsItem from "./UserPostItem"
import Alert from "../../ui/alert/Alert"

const UserPosts = () => {
    const {posts, loading, error} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const {state: {user}} = useLocation()

    useEffect(() => {
        dispatch(fetchGetAllPostsUser(user.id))
    }, [dispatch])

    return (
        <div className="user-posts">
            <header>
                <Link to="/" className="btn default">Back to users</Link>
                <h1 className="title">Posts: {posts.length}</h1>
            </header>
            {error && <Alert type="error">{error}</Alert>}
            {loading ? <Preloader/> :
                posts?.map(post => <UserPostsItem key={post.id} post={post}/>)
            }
        </div>
    )
}

export default UserPosts
