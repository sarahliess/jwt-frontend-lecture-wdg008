import { NavLink } from "react-router-dom";

export default function Navbar({ loggedIn, setLoggedIn, setToken }) {
  console.log("logged in in Navbar", loggedIn);
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        {!loggedIn && (
          <>
            <NavLink to="/login">
              <li>Login</li>
            </NavLink>
            <NavLink to="/signup">
              <li>Sign Up</li>
            </NavLink>
          </>
        )}
        {loggedIn && (
          <>
            <NavLink to="/protected/posts">
              <li>Posts</li>
            </NavLink>
            <NavLink to="/protected/quotes">
              <li>Quotes</li>
            </NavLink>
          </>
        )}
      </ul>
      {loggedIn && (
        <button
          onClick={() => {
            localStorage.removeItem("authtoken");
            setToken("");
            setLoggedIn(false);
          }}
        >
          Log out
        </button>
      )}
    </nav>
  );
}
