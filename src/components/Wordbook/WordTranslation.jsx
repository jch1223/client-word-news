import React, { Component } from "react";

export default class WordTranslation extends Component {
  constructor(props) {
    super(props);
    // fetch(baseUrl + `/api/wordbook?wordbook_id=${this.props.wordbook_id}`)
    //   .then(result => {
    //     return JSON.parse(result);
    //   })
    //   .then(data => {})
    //   .catch(err => {
    //     // TODO: throw Errors
    //     console.log(err);
    //   });

    // mockup data
    this.info = {
      wordbook_id: 4,
      word_id: 5,
      word: "book",
      translation: "[명사] 책, 도서",
      date: "2019-03-28",
      text: "A book in on the table."
    };
  }

  closeWordTranslation = e => {
    this.props.closeWordTranslation();
  };
  render() {
    return (
      <div
        className="modal-background"
        onClick={this.closeWordTranslation}
        style={this.props.display}
      >
        <div className="word-translation">
          <button
            className="word-translation-close"
            onClick={this.closeWordTranslation}
          >
            X
          </button>
          <h1>{this.info.word}</h1>
          <p>{this.info.translation}</p>
          <div>예문</div>
          <p>{this.info.text}</p>
        </div>
      </div>
    );
  }
}
