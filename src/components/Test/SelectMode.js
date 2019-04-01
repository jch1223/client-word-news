import React, { Component } from "react";

export default class SelectMode extends Component {
  render() {
    const { display } = this.props;
    return <div style={{ display: display ? "block" : "none" }} />;
  }
}
