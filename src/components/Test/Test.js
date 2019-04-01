import React, { Component } from "react";
import Questions from "../../mock-ups/Test";

import SelectMode from "./SelectMode";
import TestMode from "./TestMode";
import ResultMode from "./ResultMode";
export default class Test extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectMode: false,
    testMode: true,
    resultMode: false,
    currentQuestionIndex: 0,
    correctAnswer: 0,
    wrongAnswer: 0
  };
  isCorrect = result => {
    if (result) {
      this.setState({
        correctAnswer: this.state.correctAnswer + 1
      });
    } else {
      this.setState({
        wrongAnswer: this.state.wrongAnswer + 1
      });
    }
  };
  nextQuestion = () => {
    const currentQuestionIndex = this.state.currentQuestionIndex;
    if (currentQuestionIndex + 1 < Questions.length) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1
      });
    } else {
      this.setState({
        testMode: false,
        resultMode: true
      });
    }
  };
  render() {
    const {
      selectMode,
      testMode,
      resultMode,
      currentQuestionIndex,
      correctAnswer,
      wrongAnswer
    } = this.state;
    return (
      <div className="content">
        <SelectMode display={selectMode} />
        <TestMode
          display={testMode}
          question={Questions[currentQuestionIndex]}
          isCorrect={this.isCorrect}
          nextQuestion={this.nextQuestion}
        />
        <ResultMode
          result={{ correct: correctAnswer, wrong: wrongAnswer }}
          display={resultMode}
        />
      </div>
    );
  }
}
