import React, {useState, useEffect} from 'react';
import './App.css';

import Pagination from "./components/Navigation/Pagination/Pagination";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";

import MOCK_DATA from "./data/data";

// Initial Number of Posts
let pageCount = 5;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [postsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);

    //  Auto rotate time
    const [timer] = useState(10000);

    useEffect(() => {
        setPosts(MOCK_DATA);
    }, []);

    //  Work out total number of pages
    useEffect(() => {
        pageCount = Math.ceil((posts.length / postsPerPage));
    }, [posts]);

    //  Auto Rotate interval
    useEffect(() => {

        if (!filter) {
            const interval = setInterval(() => {
                setCurrentPage(currentPage === pageCount - 1 ? 0 : currentPage + 1)
            }, timer);
            return () => clearInterval(interval);
        }
    }, [currentPage, filter]);


    //  Get currents posts
    const indexOfLastPost = currentPage + postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    /**
     * Remove post from screen when clicked.
     *
     * @param id Post ID.
     */
    const deletePost = (id) => {
        const postsArr = posts.filter((post) => post.id !== id);
        const filteredPostsArr = filteredPosts.filter((post) => post.id !== id);

        setPosts(postsArr);
        setFilteredPosts(filteredPostsArr);
    };

    /**
     * Filter post via status.
     *
     * @param status Customer status.
     */
    const filterPosts = (status) => {
        const postsArr = posts.filter((post) => post.status.id === status);
        setFilter(true);
        setCurrentPage(0);
        setFilteredPosts(postsArr);

    };

    /**
     * Clear current filter, restoring original posts.
     */
    const clearFilter = () => {
        setFilter(false);
        setCurrentPage(0);
        paginate(0);
    };

    /**
     * Change current page.
     *
     * @param {Number} pageNumber
     */
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const postList = posts.slice(indexOfFirstPost, indexOfLastPost).map(post => {
        return (
            <div onClick={() => deletePost(post.id)} key={post.id}>
                <Container
                    productName={post.productName}
                    category={post.category}
                    size={post.size}
                    colour={post.colour}
                    status={post.status}
                    customerInitials={post.customerInitials}
                    src={post.src}
                />
            </div>
        )
    });

    const filteredPostList = filteredPosts.slice(indexOfFirstPost, indexOfLastPost).map(post => {
        return (
            <div onClick={() => deletePost(post.id)} key={post.id}>
                <Container
                    productName={post.productName}
                    category={post.category}
                    size={post.size}
                    colour={post.colour}
                    status={post.status}
                    customerInitials={post.customerInitials}
                    src={post.src}
                />
            </div>
        )
    });

    return (
        <div className="container mt-2">
            <Navigation
                filterPosts={filterPosts}
                filter={filter}
                clearFilter={clearFilter}
                setCurrentPage={setCurrentPage}/>

            {posts.length > 0 ? filter ? filteredPostList : postList : <p>No more posts...</p>}

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={filter ? filteredPosts.length : posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    )
};

export default App;
