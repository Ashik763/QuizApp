import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className="account">
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName} </span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Log in</Link>
        </>
      )}
    </div>
  );
};

export default Account;
