import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";

const LoginForm = () => {
  // console.log(useAuth);
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // console.log(createContext());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.replace(from);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login");
    }
  }
  return (
    <form
      style={{ height: "330px" }}
      onSubmit={handleSubmit}
      className="login form"
      action="#"
    >
      <div className="textInput">
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="material-icons-outlined"> alternate_email </span>
      </div>

      <div className="textInput">
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="material-icons-outlined"> lock </span>
      </div>
      <button type="submit" className="button">
        <span>Submit now</span>
      </button>
      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
};

export default LoginForm;
