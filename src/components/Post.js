import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div>
      <Link to={`/protected/posts/${post.id}`}>
        {" "}
        {post.id} - {post.title}
      </Link>
    </div>
  );
}
