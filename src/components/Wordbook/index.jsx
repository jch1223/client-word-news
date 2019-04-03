import React, { Component } from "react";
import { baseUrl } from "../../data";
import { formatted } from "../../util/datetime";
import WordbookData from "../../mock-ups/Wordbook";
import WordTranslation from "./WordTranslation";
import "./Wordbook.css";
import withRequest from "../withRequest";
import RequireSignIn from "../authentication/RequireSignIn";

class Wordbook extends Component {
  constructor(props) {
    super(props);
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth();
    // const date = today.getDate();
    // _getWordList(year, month, date)

    // mock-up test
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth();
    const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    const dateString = `${year}-${month}-${date}`;
    this.state = {
      showWord: true,
      words: WordbookData,
      date: dateString,
      showWordTranslation: false,
      targetWord: undefined
    };
  }
  _getWordList = (year, month, date) => {
    if (typeof year === "undefined") {
      fetch(baseUrl + `/api/words`)
        .then(result => {
          return result.json();
        })
        .then(data => {
          this.setState({
            words: data
          });
        });
    } else {
      fetch(baseUrl + `/api/words/${year}/${month}/${date}`)
        .then(result => {
          return result.json();
        })
        .then(data => {
          this.setState({
            words: data
          });
        });
    }
  };
  closeWordTranslation = () => {
    this.setState({
      showWordTranslation: false
    });
  };
  toggleShowWord = e => {
    e.target.innerHTML = this.state.showWord ? "뜻만 보기" : "단어만 보기";
    this.setState({
      showWord: !this.state.showWord
    });
  };
  changeDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  completeWord = e => {
    const deleteIndex = e.target.parentElement.id;
    const newWord = [...this.state.words];
    newWord.splice(deleteIndex, 1);
    fetch(baseUrl + "/api/words", {
      method: "POST",
      body: {
        wordbook_id: this.state.words[deleteIndex].wordbook_id
      }
    }).then(result => {
      this.setState({
        words: newWord ? newWord : []
      });
      return result;
    });
  };
  showAll = e => {
    fetch(baseUrl + `/api/words`)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({
          words: data
        });
      });
  };
  showLater = e => {
    const deleteIndex = e.target.parentElement.id;
    const newWords = [...this.state.words];
    const selectedWord = newWords.splice(deleteIndex, 1);
    this.setState({
      words: [...newWords, ...selectedWord]
    });
  };
  showWordTranslation = e => {
    const targetIndex = e.target.parentElement.id;
    this.setState({
      showWordTranslation: true,
      targetWord: this.state.words[targetIndex]
    });
  };

  render() {
    let {
      response,
      date,
      showWord,
      words,
      targetWord,
      showWordTranslation
    } = this.state;
    const { closeSignInModal } = this.props;
    return !response ? (
      <RequireSignIn closeSignInModal={closeSignInModal} />
    ) : (
      <>
        <WordTranslation
          className="modal-background"
          targetWord={targetWord}
          closeWordTranslation={this.closeWordTranslation.bind(this)}
          display={{ display: showWordTranslation ? "block" : "none" }}
        />
        <div className="content">
          <div className="select-date">
            <input
              type="date"
              className="datepicker"
              onChange={this.changeDate}
              selected={date}
            />
            <button onClick={this.showAll}>모든 단어 보기</button>
          </div>
          <div className="wordToggle">
            <button onClick={this.toggleShowWord}>단어만 보기</button>
          </div>
          {words.map((word, i) => {
            return (
              <div key={word.wordbook_id} id={i} className="word-item">
                <div className="complete-button" onClick={this.completeWord}>
                  &lt;암기 완료
                </div>
                {showWord ? (
                  <div className="word" onClick={this.showWordTranslation}>
                    {word.word}
                  </div>
                ) : (
                  <div
                    className="translation"
                    onClick={this.showWordTranslation}
                  >
                    {word.translation}
                  </div>
                )}
                <div className="retry-button" onClick={this.showLater}>
                  나중에 다시보기&gt;
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRequest(`${baseUrl}/api/words/${formatted(new Date())}`)(
  Wordbook
);
