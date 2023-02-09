import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts({ token }) {
  const [quotes, setQuotes] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/quotes", {
        headers: {
          authtoken: token,
        },
      });
      console.log(res.data);
      setQuotes(res.data);
      try {
      } catch (err) {
        console.log(err);
        setMessage(err.response.data);
      }
    };
    fetchData();
  }, []);

  return !quotes.length ? (
    <p>...loading</p>
  ) : (
    <div className="container">
      <h1> Quotes</h1>
      {quotes.map((quote) => (
        <p>{quote.quote}</p>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}
