import React, { Component } from "react";
import { baseUrl } from "../data";

export default class RecommendWord extends Component {
  constructor(props) {
    super(props);
    this.articleId = this.props.articleId;
    this.selectedWord = this.props.selectedWord;
  }
  saveWord() {
    fetch(baseUrl + `/api/news/${this.articleId}/word`, {
      method: "POST",
      body: {
        word_id: this.selectedWord.word_id,
        sentence_id: this.selectedWord.sentence_id
      }
    })
      .then(result => {
        return result.json;
      })
      .then(data => {
        // data === "Success"
      })
      .catch(err => {
        // TODO: throw Errors
        console.log(err);
      });
  }
  showSentence = () => {
    this.props.highlightSentence(this.selectedWord.sentence_id);
  };
  render() {
    const { selectedWord } = this.props;
    return (
      <div className="recommend-word-container">
        <div onClick={this.showSentence} className="recommend-word">
          {selectedWord.word}
        </div>
        <div className="recommend-translation">{selectedWord.translation}</div>
        <span className="save-button" onClick={this.saveWord}>
          save
        </span>
      </div>
    );
  }
}
