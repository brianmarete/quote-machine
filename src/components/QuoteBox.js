import React from "react";
import "./QuoteBox.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const quoteBox = (props) => {
  const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${props.quote}%22%0a%2D%20${props.author}`;
  return (
    <div id="quote-box">
      <div id="text">{props.quote}</div>
      <div id="author">- {props.author}</div>
      <div id="quote-box-footer">
        <button id="new-quote" onClick={props.handleNewQuote}>
          New Quote
        </button>
        <a href={tweetUrl} target="_blank" id="tweet-quote" title="Tweet Quote">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default quoteBox;
