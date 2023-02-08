import { useState } from "react";

export default function Posts({ token }) {
  const [quotes, setQuotes] = useState([]);

  return !quotes.length ? (
    <p>...loading</p>
  ) : (
    <div className="container">
      <h1> Quotes</h1>
    </div>
  );
}
