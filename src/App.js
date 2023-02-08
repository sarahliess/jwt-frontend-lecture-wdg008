import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToken={setToken}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setToken={setToken}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        {/* protected routes*/}
      </Routes>
    </div>
  );
}

export default App;
