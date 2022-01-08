import React from "react";
import "../Videos.css";
import img from "../../../images/3.jpg";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="video">
      <img src={img} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className="qmeta">
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
};

export default Video;
