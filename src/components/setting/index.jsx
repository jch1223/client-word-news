import React, { Component } from "react";
import "./Setting.css";
import { categoryList } from "../../data";

export default class Setting extends Component {
  render() {
    const languageList = ["영어", "일본어", "중국어"];
    const levelList = [1, 2, 3, 4, 5];
    return (
      <div className="content">
        <div>
          <h1>Learning Language</h1>
          <div className="lang-select-container">
            {languageList.map(language => {
              return (
                <div className="lang-select-button button">{language}</div>
              );
            })}
          </div>
        </div>
        <div>
          <h1>Word Level</h1>
          <div className="level-select-container">
            {levelList.map(level => {
              return <div className="level-select-button button">{level}</div>;
            })}
          </div>
        </div>
        <div>
          <h1>Category</h1>
          <div className="category-select-container">
            {categoryList.map(category => {
              return (
                <div className="category-select-button button">{category}</div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
