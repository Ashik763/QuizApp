import React, { useState } from "react";
import Video from "./Video/Video";
import "./Videos.css";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/UseVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  // console.log(videos);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.map((v) => (
              <Link to="/quiz" key={v.youtubeID}>
                <Video title={v.title} id={v.youtubeID} noq={v.noq} />;
              </Link>
            ))
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div className="">No Data found</div>}
      {error && <div>There was an error! </div>}
      {loading && <div>Loading... </div>}
    </div>
  );
};

export default Videos;
