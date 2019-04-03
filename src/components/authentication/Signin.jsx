import React, { Component } from "react";
import { baseUrl } from "../../data";
import "./Auth.css";

export default class Signin extends Component {
  state = {
    id: "",
    pw: ""
  };
  submit = () => {
    const { id, pw } = this.state;
    fetch(`${baseUrl}/api/sign/signin`, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        password: pw
      })
    }).then(res => {
      if (res.ok) {
        this.props.closeSignInModal();
      }
    });
  };
  render() {
    const { display } = this.props;
    const { id, pw } = this.state;
    return (
      <div
        className="modal-background"
        onClick={() => {
          this.props.closeSignInModal();
        }}
        style={{ display: display ? "block" : "none" }}
      >
        <button
          style={{ float: "right" }}
          onClick={() => {
            this.props.closeSignUpModal();
          }}
        >
          X
        </button>
        <div className="auth-modal">
          <h1>아이디</h1>
          <input placeholder="아이디를 입력하세요." defalutValue={id} />
          <h1>비밀번호</h1>
          <input placeholder="비밀번호를 입력하세요." defalutValue={pw} />

          <button type="submit" onClick={this.submit}>
            로그인
          </button>
          <button onClick={this.props.changeToSignUp}>회원가입</button>
        </div>
      </div>
    );
  }
}
