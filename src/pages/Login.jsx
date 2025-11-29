import { useEffect, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

 
  const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;
  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/users?_limit=2`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, [API_URL]);

  function handleLogin() {
    const foundUser = users.find((user) => user.username === username);

    if (!foundUser) {
      alert("Username not found!");
      return;
    }

    if (password !== SECRET) {
      alert("Incorrect password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    window.location.href = "/todos";
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username (E.g., Bret)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
