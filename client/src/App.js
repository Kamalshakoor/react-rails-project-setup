import React from 'react';
import axios from 'axios';
import './App.css';

import { useState, useEffect } from 'react';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(posts);
  return (
   <>
   <div className='App'>
   {posts.map((post) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <hr />
      </div>
    ))}
   </div>
   </>
  );
}

export default App;
