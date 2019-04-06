import React, { Component } from "react";
import SignIn from "./Signin";
import logo from "../../img/logo-icon.png";

export default class RequireSignIn extends Component {
  componentWillUnmount() {
    this.props.closeSignInModal();
  }
  render() {
    const { closeSignInModal, setSignIn, showSignIn } = this.props;
    showSignIn();
    return (
      <>
        {/* <SignIn
          display={true}
          setSignIn={setSignIn}
          closeSignInModal={closeSignInModal}
        /> */}
        <div className="require-sign-in">
          <img alt="require-sign-in-logo" src={logo} />
          <h1>로그인이 필요한 기능입니다.</h1>
        </div>
      </>
    );
  }
}
