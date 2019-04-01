import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
