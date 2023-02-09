import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SinglePost({ token }) {
  const { id } = useParams();

  const [singlePost, setSinglePost] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/posts/${id}`, {
          headers: { authtoken: token },
        });
        console.log(res.data);
        setSinglePost(res.data);
      } catch (err) {
        console.log(err);
        setMessage(err.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <p>
        <b>
          {singlePost.id} {singlePost.title}
        </b>
      </p>
      <p>{singlePost.body}</p>
      <Link to="/protected/posts">
        <button>go back</button>
      </Link>
    </div>
  );
}
