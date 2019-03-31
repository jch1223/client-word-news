import React, { Component } from "react";

export default class Test extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="select-mode">
          <button className="test-all-button">모든 날짜로 시험보기</button>
          <div className="test-date-container">
            <input type="date" />
            <button className="test-date-button">선택된 날짜로 시험보기</button>
          </div>
        </div>
        <div className="testMode" />
        <div className="resultMode" />
      </div>
    );
  }
}
