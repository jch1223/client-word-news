import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import logo from "./img/logo.png";
import NewsList from "./components/news-list";
import News from "./components/news";
import Wordbook from "./components/wordbook";
import Test from "./components/test";
import Setting from "./components/setting";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import NotFound from "./components/not-found";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
  }
  showSignInModal = () => {
    this.setState({
      showSignIn: true
    });
  };
  showSignUpModal = () => {
    this.setState({
      showSignUp: true
    });
  };
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
  changeToSignUp = () => {
    this.closeSignInModal();
    this.showSignUpModal();
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { showSignIn, showSignUp } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <nav className="nav">
              <Signin
                closeSignInModal={this.closeSignInModal}
                changeToSignUp={this.changeToSignUp}
                display={showSignIn}
              />
              <Signup
                closeSignUpModal={this.closeSignUpModal}
                display={showSignUp}
              />
              <div className="nav-menu">
                <NavLink exact to={"/"}>
                  <img alt="logo" src={logo} className="nav-logo" />
                </NavLink>
                <ul className="nav-ul">
                  <li className="nav-item">
                    <NavLink exact to={"/"}>
                      News
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/words"}>Wordbook</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/test"}>Test</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/setting"}>Setting</NavLink>
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
                <Route path="/" exact component={NewsList} />
                <Route
                  path="/words"
                  component={Wordbook}
                  showSignInModal={this.showSignInModal}
                />
                <Route
                  path="/test"
                  render={() => (
                    <Test closeSignInModal={this.closeSignInModal} />
                  )}
                />
                <Route path="/setting" component={Setting} />
                <Route path="/news/:id" component={News} />
                <Route component={NotFound} />
              </Switch>
            </nav>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
