import axios from "axios";
import React from "react";
import "./Quote.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuoteAuthor,
  selectQuoteQuote,
  selectQuoteTags,
  selectQuoteUrl,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function Quote() {
  let quote: any = useSelector(selectQuoteQuote);
  let author: any = useSelector(selectQuoteAuthor);
  let url: any = useSelector(selectQuoteUrl);
  let tags: any = useSelector(selectQuoteTags);

  const dispatch = useDispatch();

  return (
    <div id="quote-module">
      <h3>Quotes to think about while drinking tea.</h3>
      <button className="btn btn-success btn-sm" onClick={handleClick}>
        Brew Quote
      </button>
      <div id="quote-display">
        <blockquote id="quote">{quote}</blockquote>
        <blockquote id="author">{author}</blockquote>
        <p id="url">
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
        <p id="tags">{tags}</p>
      </div>
    </div>
  );

  async function handleClick() {
    const domain = window.location.hostname;
    let rootpath: string = "http://localhost:8000";
    if (
      domain === "yuki-konn.github.io" ||
      domain === "d1ionyqc0g9xy7.cloudfront.net"
    )
      rootpath =
        "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";

    const response = await axios.get(`${rootpath}/quote`);

    const quote = response.data.quote;
    const author = response.data.author;
    const url = response.data.url;
    const tags = response.data.tags;

    let action = set.quoteQuote(`"${quote}"`);
    dispatch(action);

    action = set.quoteAuthor(`~ ${author}`);
    dispatch(action);

    action = set.quoteUrl(`~ ${url}`);
    dispatch(action);

    action = set.quoteTags(`~ ${tags}`);
    dispatch(action);
  }
}
