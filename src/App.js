import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import MOCK_DATA from "./data/data";
import Dot from "./components/dot/dot";
import Nav from "./components/nav/nav";
import Container from "./container/container";
import PageCount from "./components/nav/PageCount/PageCount";
import Post from "./components/Post";


// Replace divs with react fragments

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState([4]);


    useEffect(() => {
        setPosts(MOCK_DATA);
    }, []);

    //  Get currents posts
    const indexOfLastPost = currentPage + postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const postList = posts.map(post => {
        return (
            <Container key={post.id}
                productName={post.productName}
                category={post.category}
                size={post.size}
                colour={post.colour}
                status={post.status}
                customerInitials={post.customerInitials}
            />
        )
    })

    return (
        <div className="container mt-5">
            <Nav/>
            {postList}
            {/*<Posts posts={currentPosts} loading={loading}/>*/}
            {/*<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>*/}
            <PageCount/>
        </div>
    )
};

export default App;
