import React from "react";
import Video from "./Video/Video";
import "./Videos.css";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/UseVideoList";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  return (
    <div className="videos">
      {videos.length > 0 &&
        videos.map((video) => {
          <Link to="/quiz" key={video.youtubeId}>
            {" "}
            <Video
              title={video.title}
              id={video.youtubeId}
              noq={video.noq}
            />{" "}
          </Link>;
        })}
      {!loading && videos.length === 0 && (
        <div className="">Nod Data found</div>
      )}
    </div>
  );
};

export default Videos;
