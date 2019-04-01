import React, { Component } from "react";
import ArticleList from "../mock-ups/ArticleList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wordbook from "./Wordbook";
import News from "./News";
import Category from "./Category";

export default class Newses extends Component {
  render() {
    return (
      <>
        {/* <Category /> */}
        <div className="content">
          <div className="news-ul">
            {ArticleList.map(article => {
              let totalWord = article.ngram.reduce((a, b) => a + b);
              let ngramColor = [
                "rgb(206,74,74)",
                "rgb(234,175,65)",
                "rgb(72,165,106)",
                "rgb(102,136,195)",
                "rgb(178,93,166)"
              ];
              return (
                <Link to={`news/${article.id}`}>
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
                          <div className="ngram-item" key={i} style={style} />
                        );
                      })}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
