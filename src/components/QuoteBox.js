import React from "react";

const quoteBox = (props) => {
  const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${props.quote}%22%0a%2D%20${props.author}`;
  return (
    <div id="quote-box">
      <div id="text">{props.quote}</div>
      <div id="author">- {props.author}</div>
      <button id="new-quote" onClick={props.handleNewQuote}>
        New Quote
      </button>
      <a href={tweetUrl} target="_blank" id="tweet-quote">
        Tweet Quote
      </a>
    </div>
  );
};

export default quoteBox;
