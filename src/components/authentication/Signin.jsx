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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        password: pw
      })
    }).then(res => {
      if (res.ok) {
        this.props.closeSignInModal();
        this.props.setSignIn();
      } else {
        alert("아이디와 비밀번호를 확인해 주세요.");
      }
    });
  };
  render() {
    const { display, closeSignInModal } = this.props;
    const { id, pw } = this.state;
    return (
      <div
        className="modal-background"
        style={{ display: display ? "block" : "none" }}
      >
        <div className="auth-modal">
          <button
            style={{ float: "right" }}
            onClick={() => {
              closeSignInModal();
            }}
          >
            X
          </button>
          <h1>아이디</h1>
          <input
            placeholder="아이디를 입력하세요."
            className="auth-input"
            onKeyUp={e => {
              this.setState({ id: e.target.value });
            }}
            defalutValue={id}
          />
          <h1>비밀번호</h1>
          <input
            placeholder="비밀번호를 입력하세요."
            type="password"
            className="auth-input"
            onKeyUp={e => {
              this.setState({ pw: e.target.value });
            }}
            defalutValue={pw}
          />
          <div>
            <button
              type="submit"
              className="auth-button button"
              onClick={this.submit}
            >
              로그인
            </button>
            <button
              onClick={this.props.changeToSignUp}
              className="auth-button button"
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    );
  }
}
