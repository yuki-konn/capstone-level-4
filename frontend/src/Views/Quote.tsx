import axios from "axios";
import React, { useEffect } from "react";
import "./Quote.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuoteAuthor,
  selectQuoteDidMount,
  selectQuoteQuote,
  selectQuoteResponse,
  selectQuoteTags,
  selectQuoteUrl,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { getRootPathAws } from "../utils/getRootPathAws";

export function Quote() {
  let didMount = useSelector(selectQuoteDidMount);
  let quote = useSelector(selectQuoteQuote);
  let author = useSelector(selectQuoteAuthor);
  let url = useSelector(selectQuoteUrl);
  let tags = useSelector(selectQuoteTags);
  let response: any = useSelector(selectQuoteResponse);

  const dispatch = useDispatch();

  if (response === "quoteResponse")
    response = (
      <div id="quote-display">
        <blockquote id="quote">"{quote}"</blockquote>
        <blockquote id="author">~ {author}</blockquote>
        <p id="url">
          Quote URL:{" "}
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
        <p id="tags">Quote Tags: {tags}</p>
      </div>
    );

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div id="quote-module">
      <h3>Quotes to think about while drinking tea.</h3>
      <button className="btn btn-success btn-sm" onClick={handleClick}>
        Brew Quote
      </button>
      {response}
    </div>
  );

  function componentDidMount() {
    console.log("The Quote component has mounted.");
    let action = set.quoteDidMount(true);
    dispatch(action);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("The Quote component has updated.");
    }
  }

  function componentDidUnmount() {
    return function () {
      console.log("The Quote component has unmounted.");
      let action = set.quoteDidMount(false);
      dispatch(action);
    };
  }

  async function handleClick() {
    const rootpath = getRootPathAws();

    const response = await axios.post(`${rootpath}/quote`);

    const quote = response.data.quote;
    const author = response.data.author;
    const url = response.data.url;
    const tags = response.data.tags;

    let action = set.quoteQuote(quote);
    dispatch(action);

    action = set.quoteAuthor(author);
    dispatch(action);

    action = set.quoteUrl(url);
    dispatch(action);

    action = set.quoteTags(tags);
    dispatch(action);

    action = set.quoteResponse("quoteResponse");
    dispatch(action);
  }
}
