import "./App.css";

import React, { Component } from "react";
import QuoteBox from "./components/QuoteBox";

import ReactFCCtest from "react-fcctest";

class App extends Component {
  state = {
    quote: "",
    author: "",
  };

  url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  newQuoteHandler = async () => {
    const response = await fetch(this.url);
    const quotesJson = await response.json();
    const quotes = quotesJson.quotes;

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
    });
  };

  componentDidMount(){
    this.newQuoteHandler()
  }

  render() {
    return (
      <div className="App">
        <ReactFCCtest />
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          handleNewQuote={this.newQuoteHandler}
        />
      </div>
    );
  }
}

export default App;
