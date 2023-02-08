import { useState } from "react";

export default function Posts({ token }) {
  const [posts, setPosts] = useState([]);

  //if no posts are available, show a message

  return !posts.length ? (
    <p>...loading</p>
  ) : (
    <div className="container">
      <h1> Posts</h1>
    </div>
  );
}
