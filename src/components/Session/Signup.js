import React, { Component } from "react";
import "./Auth.css";

export default class Signin extends Component {
  render() {
    const { display } = this.props;
    return (
      <div
        className="modal-background"
        onClick={() => {
          this.props.closeSignUpModal();
        }}
        style={{ display: display ? "block" : "none" }}
      >
        <div className="auth-modal">
          <h1>아이디</h1>
          <input className="auth-input" placeholder="아이디를 입력하세요." />
          <h1>비밀번호</h1>
          <input
            className="auth-input"
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
          <h1>비밀번호 확인</h1>
          <input
            className="auth-input"
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요."
          />
          <h1>이메일 주소</h1>
          <input
            className="auth-input"
            type="email"
            placeholder="이메일 주소를 입력하세요."
          />
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    );
  }
}
