import React, { Component } from "react";
import SignIn from "./Signin";
import logo from "../../img/logo-icon.png";

export default class RequireSignIn extends Component {
  state = {
    showAlert: true
  };
  render() {
    alert("로그인이 필요합니다.");
    const { closeSignInModal } = this.props;
    console.log("closeSignInModal", closeSignInModal);
    return (
      <>
        <SignIn display={true} closeSignInModal={closeSignInModal} />
        <div className="require-sign-in">
          <img alt="require-sign-in-logo" src={logo} />
          <h1>로그인이 필요한 기능입니다.</h1>
        </div>
      </>
    );
  }
}
