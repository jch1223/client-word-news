import React, { Component } from "react";
import { baseUrl } from "../../data";
import JSDOM from "jsdom";
import https from "https";
import LoadingIcon from "./LoadingIcon";

async function retrieveS(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        let data = "";
        res
          .on("error", e => {
            reject(e);
          })
          .on("data", chunk => {
            data += chunk;
          })
          .on("end", () => {
            resolve(data);
          });
      })
      .on("error", e => {
        reject(e);
      });
  });
}

export default class RecommendWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translation: undefined
    };
    this.articleId = this.props.articleId;
    this.selectedWord = this.props.selectedWord;
  }
  componentDidMount() {
    this.initialize();
  }
  async initialize() {
    const word = this.selectedWord.word;
    try {
      const url = `https://dict.naver.com/search.nhn?dicQuery=${word}&x=0&y=0&query=${word}&target=dic&ie=utf8&query_utf=&isOnlyViewEE=`;
      let html = await retrieveS(url);
      let dom = new JSDOM(html);
      let result = dom.window.document.querySelector(".dic_search_result")
        .children[1].textContent;
      this.setState({
        translation: result
      });
    } catch (e) {
      console.log(e);
    }
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
    const { translation } = this.state;
    return (
      <div className="recommend-word-container">
        <div onClick={this.showSentence} className="recommend-word button">
          {selectedWord.word}
        </div>
        {translation !== undefined ? (
          <div className="recommend-translation">
            {selectedWord.translation}
          </div>
        ) : (
          <LoadingIcon />
        )}
        <span className="save-button button" onClick={this.saveWord}>
          save
        </span>
      </div>
    );
  }
}
