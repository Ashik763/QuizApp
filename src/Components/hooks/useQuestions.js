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

const useQuestions = (videoId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  //   const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    //
    async function fetchQuestions() {
      //database related work
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(quizQuery);
        console.log(Object.values(snapshot.val()));
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    //  setTimeout(() => {
    fetchQuestions();
    //  }, 2000);
  }, [videoId]);
  return {
    loading,
    error,
    questions,
  };
};

export default useQuestions;
