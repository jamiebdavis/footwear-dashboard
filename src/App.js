import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import MOCK_DATA from "./data/data";




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

  return (
      <div className="container mt-5">
        <h1>form</h1>
        <Posts posts={currentPosts} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      </div>
  )
};

export default App;
