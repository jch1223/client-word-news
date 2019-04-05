import React, { Component } from "react";
import "./Test.css";
export default class SelectMode extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const dateString = today.toISOString().substr(0, 10);
    this.state = {
      dateString: dateString
    };
  }
  setDateString = e => {
    this.state = {
      dateString: e.target.value
    };
  };
  showTestMode = (date = "") => {
    this.props.showTestMode();
    console.log("date", date);
  };
  render() {
    const { display, showTestMode } = this.props;
    const { dateString } = this.state;
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
            <input
              type="date"
              className="test-date-picker"
              defaultValue={dateString}
            />
            <button
              className="test-date-button test-button"
              onChange={this.setDateString}
              onClick={() => {
                this.showTestMode(dateString);
              }}
            >
              선택된 날짜로 시험보기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
