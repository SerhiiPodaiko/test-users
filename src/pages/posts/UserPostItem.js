const UserPostsItem = ({post}) => {
    return (
        <div className="user-posts-item">
            <strong>{post.title}</strong>
            <span>{post.body}</span>
        </div>
    )
}

export default UserPostsItem
