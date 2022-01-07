import React from "react";
import SignupForm from "../SignupForm.js/SignupForm";
import "../styles/style.css";
import Form from "./Form/Form";
import Illustration from "./Illustration/Illustration";

const Signup = () => {
  return (
    <>
      <h1>Create an account </h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
