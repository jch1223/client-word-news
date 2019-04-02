import React, { Component } from "react";

export default class SelectMode extends Component {
  render() {
    const { display } = this.props;
    return (
      <div
        style={{ display: display ? "block" : "none" }}
        className="select-mode"
      >
        <button className="test-all-button">모든 날짜로 시험보기</button>
        <div className="test-date-container">
          <input type="date" />
          <button className="test-date-button">선택된 날짜로 시험보기</button>
        </div>
      </div>
    );
  }
}
