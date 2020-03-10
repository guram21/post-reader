import React, { useState, useEffect } from 'react';

import './App.css';
import PostList from './PostList'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('RENDER')
    getPosts()
    }, []);

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setPosts(res))
  }
  return (
    <div className="App">
      <button onClick={getPosts}>Get posts</button>

      <PostList posts={posts}/>

    </div>
  );
}

export default App;
