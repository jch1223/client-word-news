import React, { Component } from "react";

export default class ResultMode extends Component {
  render() {
    const { display, result } = this.props;
    return (
      <div
        style={{ display: display ? "block" : "none" }}
        className="select-mode"
      >
        <div>
          Result: correct-{result.correct}, wrong-{result.wrong}
        </div>
      </div>
    );
  }
}
