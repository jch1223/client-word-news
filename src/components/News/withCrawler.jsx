import React, { Component } from "react";

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

const withRequest = word => WrappedComponent => {
  return class extends Component {
    state = {
      response: null
    };
    async initialize() {
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

    componentDidMount() {
      this.initialize();
    }

    render() {
      const { translation } = this.state;
      return <WrappedComponent {...this.props} translation={translation} />;
    }
  };
};

export default withRequest;
