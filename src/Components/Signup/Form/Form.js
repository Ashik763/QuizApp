import React from "react";
// import "../../styles/style.css";
import { Link } from "react-router-dom";

const Form = () => {
  //   console.log(props);
  return (
    <form className="signup form">
      <div className="textInput">
        <input type="text" placeholder="Enter name" />
        <span className="material-icons-outlined"> person </span>
      </div>

      <div className="textInput">
        <input type="text" placeholder="Enter email" />
        <span className="material-icons-outlined"> alternate_email </span>
      </div>

      <div className="textInput">
        <input type="password" placeholder="Enter password" />
        <span className="material-icons-outlined"> lock </span>
      </div>

      <div className="textInput">
        <input type="password" placeholder="Confirm password" />
        <span className="material-icons-outlined"> lock_clock </span>
      </div>

      <label>
        <input type="checkbox" />
        <span>I agree to the Terms and Conditions</span>
      </label>

      <div className="button">
        <span>Submit now</span>
      </div>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default Form;
