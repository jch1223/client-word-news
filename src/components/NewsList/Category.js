import React, { Component } from "react";
import "./Category.css";
import { categoryList } from "../../data";
import Cookies from "js-cookie";

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
  render() {
    return (
      <div
        className="modal-background category-modal"
        style={{
          display: this.state.showCategory ? "block" : "none"
        }}
      >
        <div className="category-select">
          {categoryList.map((category, i) => {
            return (
              <CategoryOption
                title={category}
                closeCategory={() => {
                  this.closeCategory(i);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
