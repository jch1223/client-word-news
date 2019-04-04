import React, { Component } from "react";
import "./Test.css";
export default class SelectMode extends Component {
  showTestMode = () => {
    this.props.showTestMode();
  };
  render() {
    const { display, showTestMode } = this.props;
    return (
      <div className="test-container">
        <div
          style={{ display: display ? "block" : "none" }}
          className="select-mode"
        >
          <button
            className="test-all-button test-button"
            onClick={this.showTestMode}
          >
            모든 날짜로 시험보기
          </button>
          <div className="test-date-container">
            <input type="date" className="test-date-picker" />
            <button
              className="test-date-button test-button"
              onClick={this.showTestMode}
            >
              선택된 날짜로 시험보기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
