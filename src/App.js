import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import MOCK_DATA from "./data/data";
import Dot from "./components/UI/dot/dot";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import PageCount from "./components/Navigation/PageCount/PageCount";
import Post from "./components/Post";


// Replace divs with react fragments

const App = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);


    useEffect(() => {
        setPosts(MOCK_DATA);
    }, []);



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
        console.log(filteredPosts)

    };

    const clearFilter = () => {
        setFilter(false);
    };

    const postList = posts.map(post => {
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
                />
            </div>
        )
    });

    const filteredPostList = filteredPosts.map(post => {
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
                />
            </div>
        )
    });

    return (
        <div className="container mt-5">
            <Navigation
                filterPosts={filterPosts}
                filter={filter}
                clearFilter={clearFilter}/>
            {filter ? filteredPostList : postList}
            <PageCount/>
        </div>
    )
};

export default App;
