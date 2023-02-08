export default function Login({ setLoggedIn, loggedIn, setToken }) {
  return loggedIn ? (
    <div className="container">you are now logged in</div>
  ) : (
    <div className="container">
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button>log in</button>
      </form>
    </div>
  );
}
