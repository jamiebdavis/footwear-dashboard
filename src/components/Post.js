import React from 'react';

const Post = ({productName, category, size, colour, status, customerInitials}) => {
    return (
        <div>
            <p>{productName}</p>
            <p>{category}</p>
            <p>{size}</p>
            <p>{colour}</p>
            <p>{status}</p>
            <p>{customerInitials}</p>
        </div>
    )
}

export default Post;