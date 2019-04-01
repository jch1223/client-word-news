import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Newses from "./NewsList/Newses";
import Wordbook from "./Wordbook/Wordbook";
import Test from "./Test/Test";
import Setting from "./Setting";
import News from "./News/News";
import logo from "../img/logo.png";
import Signin from "./Session/Signin";
import Signup from "./Session/Signup";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
  }
  closeSignInModal = () => {
    this.setState({
      showSignIn: false
    });
  };
  closeSignUpModal = () => {
    this.setState({
      showSignUp: false
    });
  };
  render() {
    const { showSignIn, showSignUp } = this.state;
    return (
      <div className="header">
        <nav className="nav">
          <Signin
            closeSignInModal={this.closeSignInModal}
            display={showSignIn}
          />
          <Signup
            closeSignUpModal={this.closeSignUpModal}
            display={showSignUp}
          />
          <div className="nav-menu">
            <Link to={"/"}>
              <img alt="logo" src={logo} className="nav-logo" />
            </Link>
            <ul className="nav-ul">
              <li className="nav-item">
                <Link to={"/"}>News</Link>
              </li>
              <li className="nav-item">
                <Link to={"/words"}>Wordbook</Link>
              </li>
              <li className="nav-item">
                <Link to={"/test"}>Test</Link>
              </li>
              <li className="nav-item">
                <Link to={"/setting"}>Setting</Link>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    this.setState({
                      showSignIn: true
                    });
                  }}
                >
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    this.setState({
                      showSignUp: true
                    });
                  }}
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/" exact component={Newses} />
            <Route path="/words" component={Wordbook} />
            <Route path="/test" component={Test} />
            <Route path="/setting" component={Setting} />
            <Route path="/news/:id" component={News} />
            <Route
              exact
              path="/news"
              render={() => <h3>Please select a topic.</h3>}
            />
          </Switch>
        </nav>
      </div>
    );
  }
}
