import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  let { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://hfxe5q.sse.codesandbox.io/messages/${postId}`)
      .then((data) => {
        setPost(data.data);
      });
  }, []);
  
  return (
    <div className="container2">
      <div className="singlepost card">
        <h1>{post.title}</h1>
        <h5>
          {post.author} | {post.time}
        </h5>
        <h2>{post.message}</h2>
      </div>
    </div>
  );
}
