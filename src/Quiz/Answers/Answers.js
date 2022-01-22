import React from "react";
import Answer from "./Answer/Answer";

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Answer
          className="answer"
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
