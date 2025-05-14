import { getQuote } from "./getQuote";
import { Quote } from "../models/Quote";

describe("getQuote function (API response)", () => {
  test("returns a response", async () => {
    // ARRANGE
    let response: Quote;
    // ACT
    response = await getQuote();
    // ASSERT
    expect(response).toHaveProperty("author");
    expect(response).toHaveProperty("quote");
    expect(response).toHaveProperty("tags");
    expect(response).toHaveProperty("url");
  });
  test("return is not the same quote or url", async () => {
    // ARRANGE
    let response1: Quote;
    let response2: Quote;

    // ACT
    response1 = await getQuote();
    response2 = await getQuote();

    // ASSERT
    expect(response1).toHaveProperty("quote");
    expect(response1).toHaveProperty("url");

    expect(response2).toHaveProperty("quote");
    expect(response2).toHaveProperty("url");

    expect(response1.quote).not.toBe(response2.quote);
    expect(response1.url).not.toBe(response2.url);
  });
});
