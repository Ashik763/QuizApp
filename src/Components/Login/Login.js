import React from "react";
import LoginForm from "./loginForm/LoginForm";
import LoginIllustration from "./LoginIllustration/LoginIllustration";

const Login = () => {
  return (
    <>
      <h1>Login to your account </h1>
      <div className="column">
        <LoginIllustration />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
