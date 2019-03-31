import React, { Component } from "react";
import RecommendWord from "./RecommendWord";
import Data from "../mock-ups/Article";
export default class News extends Component {
  constructor(props) {
    super(props);
    // const {
    //   match: { params }
    // } = this.props;

    this.state = {};
    this.article = {};
    this.selectedWordList = {};

    // const path = `/api/news/${params.id}`;
    // fetch(`52.23.194.151${path}`)
    //   .then(result => {
    //     console.log(result);
    //     result.json();
    //   })
    //   .then(data => {
    //     this.article = data.article;
    //     this.selectedWordList = data.words;
    //   })
    //   .catch(err => {
    //     // TODO: Throw Exceptions
    //     console.log(err);
    //   });

    // Dummy
    this.article = Data.article;
    this.selectedWordList = Data.words;
    console.log(Data);
  }
  render() {
    const article = this.article;
    const selectedWordList = this.selectedWordList;
    return (
      <div className="content">
        <div className="acticle-content">
          <h1>{article.title}</h1>
        </div>
        <div className="recommend-words-container">
          <h1 className="recommend-words-title">words</h1>
          <div className="recommend-word-list">
            {selectedWordList.map(selectedWord => {
              return (
                <RecommendWord
                  key={selectedWord.article_word_id}
                  articleId={article.id}
                  selectedWord={selectedWord}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
