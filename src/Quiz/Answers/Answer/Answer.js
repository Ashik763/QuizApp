import React from "react";

const Answer = ({ className, text, value, checked }) => {
  console.log(text);
  return (
    <label className="answer" for="option1">
      <input type="checkbox" id="option1" />A New Hope 1
    </label>
  );
};

export default Answer;
