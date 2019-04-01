import React, { Component } from "react";

export default class Test extends Component {
  state = {
    selectMode: false,
    testMode: true,
    resultMode: false
  };
  render() {
    const { selectMode, testMode, resultMode } = this.state;
    return (
      <div className="content">
        <div
          style={{ display: selectMode ? "block" : "none" }}
          className="select-mode"
        >
          <button className="test-all-button">모든 날짜로 시험보기</button>
          <div className="test-date-container">
            <input type="date" />
            <button className="test-date-button">선택된 날짜로 시험보기</button>
          </div>
        </div>
        <div
          style={{ display: testMode ? "block" : "none" }}
          className="testMode"
        />
        <div
          style={{ display: resultMode ? "block" : "none" }}
          className="resultMode"
        />
      </div>
    );
  }
}
