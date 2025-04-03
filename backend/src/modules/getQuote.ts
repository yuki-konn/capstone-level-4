import axios from "axios";
export async function getQuote() {
  const getResponse = await axios.get("https://favqs.com/api/qotd");

  const response = {
    author: getResponse.data.quote.author,
    quote: getResponse.data.quote.body,
    tags: getResponse.data.quote.tags,
    url: getResponse.data.quote.url,
  };
  return response;
}
