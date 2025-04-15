import axios from "axios";
import { Quote } from "./Quote";

// Quote API Function
export async function getQuote(): Promise<Quote> {
  const getResponse = await axios.get("https://favqs.com/api/qotd");

  const response: Quote = {
    author: getResponse.data.quote.author,
    quote: getResponse.data.quote.body,
    tags: getResponse.data.quote.tags,
    url: getResponse.data.quote.url,
  };
  return response;
}

// Not sure where to use this yet. For now is placed in home page.
