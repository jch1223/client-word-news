import React, { Component } from "react";
import "./Auth.css";

export default class Signin extends Component {
  render() {
    const { display } = this.props;
    return (
      <div
        className="modal-background"
        onClick={() => {
          this.props.closeSignInModal();
        }}
        style={{ display: display ? "block" : "none" }}
      >
        <div className="auth-modal">
          <h1>아이디</h1>
          <input placeholder="아이디를 입력하세요." />
          <h1>비밀번호</h1>
          <input placeholder="비밀번호를 입력하세요." />

          <button>로그인</button>
          <button onClick={this.props.changeToSignUp}>회원가입</button>
        </div>
      </div>
    );
  }
}
