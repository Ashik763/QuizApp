import React, { useEffect, useReducer, useState } from "react";
import Answers from "./Answers/Answers";
import "../styles/quiz.css";
// import "../styles/grid-list.css";
import ProgressBar from "./ProgressBar/ProgressBar";
import MiniPlayer from "./MiniPlayer/MiniPlayer";
import { useParams } from "react-router-dom";
import useQuestions from "../Components/hooks/useQuestions";
import _ from "lodash";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        // console.log(action.value);
        // console.log(question);
        question.forEach((q) => {
          q.options.forEach((option) => {
            option.checked = false;
          });
        });
        // question.options.forEach((option) => {
        //   option.checked = false;
        // });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  // let i = 0;
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  return (
    <>
      {loading && <div>Loading... </div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          {console.log(qna)}
          {/* <h1>{qna[currentQuestion].title}hello</h1> */}
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
