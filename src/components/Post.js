import React from 'react';

const Post = ({productName, category, size, colour, status, customerInitials}) => {
    return (
        <div>
            <p>{productName} // {category} // {size} {colour} // {status}// {customerInitials}</p>
        </div>
    )
}

export default Post;