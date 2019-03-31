import React, { Component } from "react";
import ArticleList from "../mock-ups/ArticleList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wordbook from "./Wordbook";

export default class Newses extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="news-list">
            <div className="news-ul">
              <Router>
                {ArticleList.map(article => {
                  let totalWord = article.ngram.reduce((a, b) => a + b);
                  let ngramColor = ["red", "yellow", "green", "blue", "purple"];
                  return (
                    <Link key={article.id} to={`news/${article.id}`}>
                      <div className="news-item">
                        <div className="news-item-thumbnail-container">
                          <img
                            alt={`thumbnail${article.id}`}
                            className="news-item-thumbnail"
                            src={article.photoUrl}
                          />
                        </div>
                        <div className="news-item-title">{article.title}</div>
                        <div className="news-item-date">{article.date}</div>
                        <div className="ngram-bar">
                          {article.ngram.map((ngram, i) => {
                            let percent = Math.round((ngram / totalWord) * 100);
                            var style = {
                              width: `${percent}%`,
                              backgroundColor: ngramColor[i]
                            };
                            return (
                              <div
                                className="ngram-item"
                                key={i}
                                style={style}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Router>
            </div>
          </div>
        </div>
      </>
    );
  }
}
