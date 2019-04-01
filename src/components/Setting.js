import React, { Component } from "react";
import fullstar from "../img/full-star.png";
import emptystar from "../img/empty-star.png";
import "./Setting.css";

export default class Setting extends Component {
  render() {
    return (
      <div className="content">
        <div>
          <h1>Learning Language</h1>
          <div className="lang-select-container">
            <div className="lang-select-button button">English</div>
            <div className="lang-select-button button">Japanese</div>
            <div className="lang-select-button button">Chinese</div>
          </div>
        </div>
        <div>
          <h1>Word Level</h1>
          <div className="level-select-container">
            <div className="level-select-button button">1</div>
            <div className="level-select-button button">2</div>
            <div className="level-select-button button">3</div>
            <div className="level-select-button button">4</div>
            <div className="level-select-button button">5</div>
          </div>
        </div>
        <div>
          <h1>Category</h1>
          <div className="category-select-container">
            <div className="category-select-button button">핫토픽</div>
            <div className="category-select-button button">정치</div>
            <div className="category-select-button button">세계증시</div>
            <div className="category-select-button button">IT비즈니스</div>
            <div className="category-select-button button">스포츠</div>
            <div className="category-select-button button">연예</div>
            <div className="category-select-button button">테크</div>
            <div className="category-select-button button">패션</div>
          </div>
        </div>
      </div>
    );
  }
}
