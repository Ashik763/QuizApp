import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ProgressBar = () => {
  return (
    <div className="progressBar">
      <div className="backButton">
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip">24% Cimplete!</div>
        <div className="rangeBody">
          <div className="progress"></div>
        </div>
      </div>
      <Link to="/result">
        <Button className="button next ">
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
};

export default ProgressBar;
