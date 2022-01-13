import React from "react";
import "../Videos.css";
import img from "../../../images/3.jpg";
import { Link } from "react-router-dom";

const Video = ({ title, id, noq }) => {
  return (
    <div key={id} className="video">
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total points: {noq * 5} </p>
      </div>
    </div>
  );
};

export default Video;
