import React, { useEffect, useState } from "react";
import data from '../data.json'; 

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data); 
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
