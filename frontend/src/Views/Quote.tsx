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
      <>
        <div id="quote-display" className="row">
          <div className="row">
            <div className="col">
              <blockquote id="quote">"{quote}"</blockquote>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <blockquote id="author">~ {author}</blockquote>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p id="url">
                Quote URL:{" "}
                <a href={url} target="_blank">
                  {url}
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p id="tags">Quote Tags: {tags}</p>
            </div>
          </div>
        </div>
      </>
    );

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div id="quote-module" className="text-center m-2">
      <div className="row">
        <div className="col">
          <h3>Quotes to think about while drinking tea.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-success btn-sm" onClick={handleClick}>
            Brew Quote
          </button>
        </div>
      </div>
      {response}
    </div>
  );

  function componentDidMount() {
    console.log("Quote Component: Mount Phase");
    let action = set.quoteDidMount(true);
    dispatch(action);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("Quote Component: Update Phase");
    }
  }

  function componentDidUnmount() {
    return function () {
      console.log("Quote Component: Unmount Phase");
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
