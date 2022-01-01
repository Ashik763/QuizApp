import React from "react";
import "./Nav.css";
import Account from "./Account";
import navLogo from "./images/logo-bg.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={navLogo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </div>
  );
};

export default Nav;
