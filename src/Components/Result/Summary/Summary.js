import React from "react";
import resultImg from "../../images/success.png";

const Summary = () => {
  return (
    <div class="summary">
      <div class="point">
        <p class="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class="badge">
        <img src={resultImg} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
