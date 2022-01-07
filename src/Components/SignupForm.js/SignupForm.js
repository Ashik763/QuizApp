import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <form
      style={{ height: "500px" }}
      className="signup form"
      onSubmit={handleSubmit}
    >
      <div className="textInput">
        <input
          required
          type="text"
          placeholder="Enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className="material-icons-outlined"> person </span>
      </div>

      <div className="textInput">
        <input
          required
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="material-icons-outlined"> alternate_email </span>
      </div>

      <div className="textInput">
        <input
          required
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="material-icons-outlined"> lock </span>
      </div>

      <div className="textInput">
        <input
          required
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span className="material-icons-outlined"> lock_clock </span>
      </div>

      <label>
        <input
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
          type="checkbox"
        />
        <span>I agree to the Terms and Conditions</span>
      </label>

      <button disabled={loading} type="submit" className="button">
        <span>Submit now</span>
      </button>
      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default SignupForm;
