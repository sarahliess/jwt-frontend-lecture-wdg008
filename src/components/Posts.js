import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function Posts({ token }) {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  //if no posts are available, show a message

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/posts", {
          headers: {
            authtoken: token,
          },
        });
        console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
        setMessage(err.response.data);
      }
    };
    fetchData();
  }, []);

  return !posts.length ? (
    <p>...loading</p>
  ) : (
    <div className="container">
      <h1> Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}
