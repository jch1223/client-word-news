import React, { Component } from "react";
import "./Setting.css";
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

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 0,
      selectedLevel: 0,
      selectedCategory: 0
    };
  }

  componentDidMount() {
    const level = Cookies.get("level");
    if (level) {
      this.setState({
        selectedLevel: parseInt(level)
      });
    }
    const categoryId = Cookies.get("categoryId");
    if (categoryId !== undefined) {
      this.setState({
        selectedCategory: parseInt(categoryId)
      });
    }
  }

  selectedLanguage = index => {
    alert("준비중입니다.");
    // this.setState({
    //   selectedCategory: index
    // });
  };
  selectedLevel = level => {
    Cookies.set("level", level);
    this.setState({
      selectedLevel: level
    });
  };
  selectedCategory = index => {
    Cookies.set("categoryId", index);
    this.setState({
      selectedCategory: index
    });
  };

  render() {
    const { selectedLanguage, selectedLevel, selectedCategory } = this.state;
    const languageList = ["영어", "일본어", "중국어"];
    const levelList = [1, 2, 3, 4, 5];

    return (
      <div className="content">
        <div>
          <h1 className="setting-title">Learning Language</h1>
          <div className="lang-select-container">
            {languageList.map((language, index) => {
              return (
                <div
                  style={{
                    backgroundColor:
                      selectedLanguage === index
                        ? "var(--third-color)"
                        : "transparent"
                  }}
                  className="lang-select-button button"
                  onClick={() => {
                    this.selectedLanguage(index);
                  }}
                >
                  {language}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="setting-title">Word Level</h1>
          <div className="level-select-container">
            {levelList.map((level, index) => {
              return (
                <div
                  style={{
                    backgroundColor:
                      selectedLevel - 1 === index
                        ? "var(--third-color)"
                        : "transparent"
                  }}
                  className="level-select-button button"
                  onClick={() => {
                    this.selectedLevel(index + 1);
                  }}
                >
                  {level}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="setting-title">Category</h1>
          <div className="category-select-container">
            {categoryList.map((category, index) => {
              let style = {
                backgroundImage: `url(${imgs[index]})`,
                backgroundColor:
                  selectedCategory === index ? "" : "rgba(1,1,1,0.8)"
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
      </div>
    );
  }
}
