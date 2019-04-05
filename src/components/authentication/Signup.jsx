import React, { Component } from "react";
import "./Auth.css";
import { baseUrl } from "../../data";

export default class Signin extends Component {
  state = {
    id: "",
    pw: "",
    email: ""
  };
  submit = () => {
    const { id, pw, email } = this.state;
    fetch(`${baseUrl}/api/sign/signup`, {
      method: "POST",
      head: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name: id,
        password: pw,
        email: email,
        target_lang: "en",
        user_lang: "kr",
        level: 1,
        categort_id: 1
      })
    }).then(res => {
      if (res.ok) {
        alert("회원가입 완료");
        this.props.closeSignUpModal();
      } else {
        alert(res.statusText);
      }
    });
  };
  render() {
    const { display } = this.props;
    return (
      <div
        className="modal-background"
        style={{ display: display ? "block" : "none" }}
      >
        <div className="auth-modal" onClick={() => {}}>
          <button
            style={{ float: "right" }}
            onClick={() => {
              this.props.closeSignUpModal();
            }}
          >
            X
          </button>
          <h1>아이디</h1>
          <input
            className="auth-input"
            defaultValue={this.state.id}
            className="auth-input"
            placeholder="아이디를 입력하세요."
            onKeyPressed={e => {
              this.setState({
                id: e.target.value
              });
            }}
          />
          <h1>비밀번호</h1>
          <input
            className="auth-input"
            type="password"
            defaultValue={this.state.pw}
            className="auth-input"
            placeholder="비밀번호를 입력하세요."
            onKeyPressed={e => {
              this.setState({
                pw: e.target.value
              });
            }}
          />
          <h1>이메일 주소</h1>
          <input
            className="auth-input"
            type="email"
            defaultValue={this.state.email}
            className="auth-input"
            onChange={e => {
              this.setState({
                email: e.target.value
              });
            }}
            placeholder="이메일 주소를 입력하세요."
          />
          <button
            type="submit"
            className="auth-button button"
            onClick={this.submit}
          >
            확인
          </button>
        </div>
      </div>
    );
  }
}
