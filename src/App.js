import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from "./components/Navigation/Pagination/Pagination";
import Posts from "./components/Posts";
import MOCK_DATA from "./data/data";
import Dot from "./components/UI/dot/dot";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import PageCount from "./components/Navigation/PageCount/PageCount";
import Post from "./components/Post";
import Slider from "./components/Navigation/Slider/Slider";


// Replace divs with react fragments

const App = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);




    useEffect(() => {
        setPosts(MOCK_DATA);
    }, []);

    //  Get currents posts
    const indexOfLastPost = currentPage + postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    /**
     * Remove post from screen when clicked
     *
     * @param {String} id Post ID.
     */
    const deletePost = (id) => {
        const postsArr = posts.filter((post) => post.id !== id);
        const filteredPostsArr = filteredPosts.filter((post) => post.id !== id);

        setPosts(postsArr);
        setFilteredPosts(filteredPostsArr);
    };

    const filterPosts = (status) => {
        const postsArr = posts.filter((post) => post.status.id === status);
        setFilter(true);
        setFilteredPosts(postsArr);
    };

    const clearFilter = () => {
        setFilter(false);
    };

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const postList = posts.slice(indexOfFirstPost, indexOfLastPost).map(post => {
        return (
            <div onClick={() => deletePost(post.id)}>
                <Container
                    key={post.id}
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
            <div onClick={() => deletePost(post.id)}>
                <Container
                    key={post.id}
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
            {/*<Slider/>*/}
            <Navigation
                filterPosts={filterPosts}
                filter={filter}
                clearFilter={clearFilter}/>

            {filter ? filteredPostList : postList}


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
