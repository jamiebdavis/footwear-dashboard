import React from 'react'
import Post from "./Post";


const Posts = ({posts, loading}) => {
    return (
        <ul className="list-group mb-4">
            {posts.map(post => (<li key={posts.id} className="list-group-item">
                {post.name}
                <Post
                    productName={post.productName}
                    category={post.category}
                    size={post.size}
                    colour={post.colour}
                    status={post.status}
                    customerInitials={post.customerInitials}
                />
            </li>))}
        </ul>
    )
};

export default Posts;