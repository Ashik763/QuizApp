import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Account;
