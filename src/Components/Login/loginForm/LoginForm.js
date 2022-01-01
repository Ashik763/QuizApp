import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Quiz/Button/Button";

const LoginForm = () => {
  return (
    <form className="login form" action="#">
      <div className="textInput">
        <input type="text" placeholder="Enter email" />
        <span className="material-icons-outlined"> alternate_email </span>
      </div>

      <div className="textInput">
        <input type="password" placeholder="Enter password" />
        <span className="material-icons-outlined"> lock </span>
      </div>
      <Button className="button">
        <span>Submit now</span>
      </Button>

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
};

export default LoginForm;
