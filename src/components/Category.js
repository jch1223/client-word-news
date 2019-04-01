import React, { Component } from "react";
import "./Category.css";

export default class Category extends Component {
  render() {
    return (
      <div className="modal-background category-modal">
        <div className="category-select">
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
    );
  }
}
