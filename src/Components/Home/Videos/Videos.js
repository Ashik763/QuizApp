import React from "react";
import Video from "./Video/Video";
import "./Videos.css";
import { Link } from "react-router-dom";

const Videos = () => {
  return (
    <div className="videos">
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
