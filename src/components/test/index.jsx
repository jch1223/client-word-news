import React, { Component } from "react";

import { formatted } from "../../util/datetime";
import { baseUrl } from "../../data";
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
    wrongAnswer: 0,
    questions: undefined
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
    if (currentQuestionIndex + 1 < this.state.questions.length) {
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
  showTestMode = dateString => {
    fetch(`${baseUrl}/api/test/${dateString}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      })
      .then(data => {
        this.setState({
          testMode: true,
          selectMode: false,
          questions: data
        });
      })
      .catch(err => {
        console.log(err.message);
        if (err.message === "404") {
          alert("해당 날짜에 만들어진 단어장이 없습니다.");
        } else {
          alert(err.message);
        }
      });
  };
  render() {
    const {
      response,
      closeSignInModal,
      isSignIn,
      setSignIn,
      showSignIn
    } = this.props;
    const {
      selectMode,
      testMode,
      resultMode,
      currentQuestionIndex,
      correctAnswer,
      wrongAnswer,
      questions
    } = this.state;
    // if (!response) {
    //   return ;
    //   // this.props.showSignInModal();
    // } else {
    return isSignIn ? (
      <div className="content">
        <SelectMode display={selectMode} showTestMode={this.showTestMode} />
        {testMode ? (
          <TestMode
            display={testMode}
            question={questions ? questions[currentQuestionIndex] : {}}
            isCorrect={this.isCorrect}
            nextQuestion={this.nextQuestion}
          />
        ) : (
          <></>
        )}
        <ResultMode
          result={{ correct: correctAnswer, wrong: wrongAnswer }}
          display={resultMode}
          showSelectMode={this.showSelectMode}
        />
      </div>
    ) : (
      <RequireSignIn
        closeSignInModal={closeSignInModal}
        setSignIn={setSignIn}
        showSignIn={showSignIn}
      />
    );
  }
  // }
}
export default withRequest(`${baseUrl}/api/words/${formatted(new Date())}`)(
  Test
);
