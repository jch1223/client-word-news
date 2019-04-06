import React, { Component } from "react";
import correct from "../../img/correct.png";
import incorrect from "../../img/incorrect.png";

export default class ResultMode extends Component {
  render() {
    const { display, result, showSelectMode } = this.props;
    return (
      <div className="test-container">
        <div
          style={{ display: display ? "block" : "none" }}
          className="select-mode"
        >
          <div className="result-box-container">
            <div className="correct-result-box result-box">
              <img src={correct} />
              <h1>{result.correct}</h1>
            </div>
            <div className="incorrect-result-box result-box">
              <img src={incorrect} />
              <h1>{result.wrong}</h1>
            </div>
          </div>
          <button onClick={showSelectMode} className="test-button">
            테스트 다시보기
          </button>
        </div>
      </div>
    );
  }
}
