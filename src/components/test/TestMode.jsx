import React, { Component } from "react";
import "./Test.css";

export default class TestMode extends Component {
  selectAnswer = index => {
    this.props.isCorrect(this.props.question.answer === index);
    this.props.nextQuestion(index);
  };
  render() {
    const { display, question } = this.props;
    return (
      <div
        style={{ display: display ? "block" : "none" }}
        className="test-container"
      >
        <h1 className="test-word">{question.word}</h1>
        <div className="test-selections">
          {[...Array(4).keys()].map(index => {
            return (
              <div
                className="test-selection"
                onClick={() => {
                  this.selectAnswer(index);
                }}
              >
                <span className="test-selection-number">{index + 1}</span>
                {question.translations[index]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
