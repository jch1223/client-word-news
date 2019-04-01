import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Newses from "./Newses";
import Wordbook from "./Wordbook";
import Test from "./Test";
import Setting from "./Setting";
import Signin from "./Signin";
import Signup from "./Signup";
import News from "./News";
import logo from "../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav">
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
                <a onClick={() => {}}>Sign In</a>
              </li>
              <li className="nav-item">
                <a onClick={() => {}}>Sign Up</a>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/" exact component={Newses} />
            <Route path="/words" component={Wordbook} />
            <Route path="/test" component={Test} />
            <Route path="/setting" component={Setting} />
            {/* <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} /> */}
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
