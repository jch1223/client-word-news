import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  onClickItem = () => {
    const url = "http://ec2-52-23-194-151.compute-1.amazonaws.com:8080";
    fetch(url)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({
          users: [...this.state.users, ...data]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <div>
          {this.state.users.map(user => (
            <h1>{user}</h1>
          ))}
        </div>
        <button onClick={this.onClickItem}> show Users</button>
      </div>
    );
  }
}

export default App;
