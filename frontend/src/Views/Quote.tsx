import axios from "axios";
import React, { useState } from "react";
import "./Quote.scss";
import { Link } from "react-router";

export function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");

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
          <Link to={url} target="_blank">
            {url}
          </Link>
        </p>
        <p id="tags">{tags}</p>
      </div>
    </div>
  );

  async function handleClick() {
    const domain = window.location.hostname;
    let rootpath: string = "";
    // Determines if local or GitHub Pages
    if (domain === "yuki-konn.github.io")
      rootpath =
        "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";

    const response = await axios.get(`${rootpath}/quote`);

    const quote = response.data.quote;
    const author = response.data.author;
    const url = response.data.url;
    const tags = response.data.tags;
    setQuote(`"${quote}"`);
    setAuthor(`~ ${author}`);
    setUrl("Link: " + `${url}`);
    setTags("Quote Tags: " + `${tags}`);
  }
}
