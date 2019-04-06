import React, { Component } from "react";
import "./Category.css";
import { categoryList } from "../../data";
import Cookies from "js-cookie";

import category0 from "../../img/category0.jpg";
import category1 from "../../img/category1.jpg";
import category2 from "../../img/category2.jpg";
import category3 from "../../img/category3.jpg";
import category4 from "../../img/category4.jpg";
import category5 from "../../img/category5.jpg";
import category6 from "../../img/category6.jpg";
import category7 from "../../img/category7.jpg";
const imgs = [
  category0,
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7
];
const CategoryOption = ({ title, closeCategory }) => {
  return (
    <div
      className="category-select-button button"
      onClick={() => {
        closeCategory();
      }}
    >
      {title}
    </div>
  );
};

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategory: this.props.hasCategory ? false : true
    };
  }
  componentDidMount() {}
  closeCategory = id => {
    this.setState({
      showCategory: false
    });

    // set cookie
    Cookies.set("categoryId", id);
    this.props.changeCategory(id);

    // TODO: change user info
  };
  selectedCategory = index => {
    Cookies.set("categoryId", index);
    this.setState({
      showCategory: false
    });
  };

  render() {
    return (
      <div
        className="modal-background category-modal"
        style={{
          display: this.state.showCategory ? "block" : "none"
        }}
      >
        <div className="category-select">
          {categoryList.map((category, index) => {
            let style = {
              backgroundImage: `url(${imgs[index]})`,
              backgroundColor: "rgba(1,1,1,0.8)"
            };
            return (
              <div
                style={style}
                onClick={() => {
                  this.selectedCategory(index);
                }}
                className="category-select-button button"
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
