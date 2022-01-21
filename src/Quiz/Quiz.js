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
        question.options.forEach((option) => {
          option.checked = false;
        });
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

  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
