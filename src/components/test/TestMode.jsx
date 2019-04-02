import React, { Component } from "react";

export default class TestMode extends Component {
  selectAnswer = index => {
    this.props.isCorrect(this.props.question.answer === index);
    this.props.nextQuestion(index);
  };
  render() {
    const { display, question } = this.props;
    console.log(question);
    return (
      <div style={{ display: display ? "block" : "none" }}>
        <h1>{question.word}</h1>
        {[...Array(4).keys()].map(index => {
          return (
            <div
              onClick={() => {
                this.selectAnswer(index);
              }}
            >
              <span>{index + 1}</span>
              {question.translations[index]}
            </div>
          );
        })}
      </div>
    );
  }
}
