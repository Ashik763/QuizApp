import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import React, { useEffect, useState } from "react";

const UseVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    //
    async function fetchVideos() {
      //database related work
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(page + 8)
      );
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(videoQuery);
        console.log(Object.values(snapshot.val()));
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    setTimeout(() => {
      fetchVideos();
    }, 2000);
  }, [page]);
  return {
    loading,
    error,
    videos,
    hasMore,
  };
};

export default UseVideoList;
