import React, { Component } from "react";
import RecommendWord from "./RecommendWord";
import Data from "../../mock-ups/Article";
import "./News.css";
import Word from "./Word";

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
    // scroll to the sentence
    const sentence = this.refs[`sentence-${sentenceId}`];
    const rect = sentence.getBoundingClientRect();
    window.scrollTo(0, rect.top + window.scrollY);

    //highlight the sentence
    sentence.classList.toggle("sentence-highlight");
    setTimeout(() => {
      sentence.classList.toggle("sentence-highlight");
    }, 1000);
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
              <img alt={article.title} src={article.photoUrl} />
            </div>
            <div className="news-text">
              <div>{article.date}</div>
              {article.contents.map(sentence => {
                if (sentence.content.length) {
                  let text = sentence.content;
                  selectedWordList.forEach(data => {
                    if (text.indexOf(data.word) !== -1) {
                      let splitArr = text.split(data.word);
                      text = [
                        splitArr[0],
                        <Word grade={data.grade} data={data.word} />,
                        splitArr[1]
                      ];
                    }
                  });
                  return (
                    <span
                      className={`sentence sentence-${sentence.sentence_id}`}
                      ref={`sentence-${sentence.sentence_id}`}
                    >
                      {text}
                    </span>
                  );
                } else {
                  return <div className="spacing" />;
                }
              })}
            </div>
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
