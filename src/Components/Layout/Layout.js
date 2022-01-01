import React from "react";
import Nav from "../Nav";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="main">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
