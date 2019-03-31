import React, { Component } from "react";
import RecommendWord from "./RecommendWord";
import Data from "../mock-ups/Article";
import "./News.css";
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
  }
  highlightSentence = sentenceId => {
    const sentence = this.refs[`sentence-${sentenceId}`];
    // sentence.style.backgroundColor = "black";
    const rect = sentence.getBoundingClientRect();
    window.scrollTo(0, rect.top + window.scrollY);
    // sentence.click();
    document.getElementsByClassName(`sentence-${sentenceId}`)[0].focus();
  };
  render() {
    const article = this.article;
    const selectedWordList = this.selectedWordList;
    return (
      <div className="content">
        <div className="news-content">
          <div className="acticle-content">
            <h1>{article.title}</h1>
            <div className="article-photo-container">
              <img src={article.photoUrl} />
            </div>
            <div>{article.date}</div>
            <div>
              {article.contents.map(sentence => {
                return sentence.content.length ? (
                  <span
                    className={`sentence sentence-${sentence.sentence_id}`}
                    ref={`sentence-${sentence.sentence_id}`}
                  >
                    {sentence.content}
                  </span>
                ) : (
                  <div className="spacing" />
                );
              })}
            </div>
            <div className="article-author">{article.author}</div>
            <div className="article-publisher">출처: {article.publisher}</div>
          </div>
          <div className="recommend-words-container">
            <h1 className="recommend-words-title">words</h1>
            <div className="recommend-word-list">
              {selectedWordList.map(selectedWord => {
                return (
                  <RecommendWord
                    highlightSentence={this.highlightSentence.bind(this)}
                    key={selectedWord.article_word_id}
                    articleId={article.id}
                    selectedWord={selectedWord}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
