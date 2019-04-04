import React, { Component } from "react";
import Questions from "../../mock-ups/Test";

import { formatted } from "../../util/datetime";
import { baseUrl } from "../../data";
import SignIn from "../authentication/Signin";
import SelectMode from "./SelectMode";
import TestMode from "./TestMode";
import ResultMode from "./ResultMode";
import withRequest from "../withRequest";
import RequireSignIn from "../authentication/RequireSignIn";

class Test extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectMode: true,
    testMode: false,
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
  showSelectMode = () => {
    this.setState({
      selectMode: true,
      resultMode: false
    });
  };
  showTestMode = () => {
    this.setState({
      testMode: true,
      selectMode: false
    });
  };
  render() {
    const { response, closeSignInModal } = this.props;
    const {
      selectMode,
      testMode,
      resultMode,
      currentQuestionIndex,
      correctAnswer,
      wrongAnswer
    } = this.state;
    // if (!response) {
    //   return <RequireSignIn closeSignInModal={closeSignInModal} />;
    //   // this.props.showSignInModal();
    // } else {
    return (
      <div className="content">
        <SelectMode display={selectMode} showTestMode={this.showTestMode} />
        <TestMode
          display={testMode}
          question={Questions[currentQuestionIndex]}
          isCorrect={this.isCorrect}
          nextQuestion={this.nextQuestion}
        />
        <ResultMode
          result={{ correct: correctAnswer, wrong: wrongAnswer }}
          display={resultMode}
          showSelectMode={this.showSelectMode}
        />
      </div>
    );
  }
  // }
}
export default withRequest(`${baseUrl}/api/words/${formatted(new Date())}`)(
  Test
);
