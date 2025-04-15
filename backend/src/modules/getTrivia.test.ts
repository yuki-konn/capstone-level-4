import { getTrivia } from "./getTrivia";
import { TriviaQuery, TriviaResponse } from "./Trivia";
describe("getTrivia function (API response)", () => {
  test("accepts a query object with amount, category, difficulty and type", async () => {
    // ARRANGE
    const query: TriviaQuery = {
      amount: 1,
      category: 9,
      difficulty: "medium",
      type: "multiple",
    };
    // ACT
    const result = await getTrivia(query);
    // ASSERT
    expect(result).toBeDefined;
  });
  test("accepts a query object and returns a response", async () => {
    // ARRANGE
    const query: TriviaQuery = {
      amount: 1,
      category: 9,
      difficulty: "medium",
      type: "multiple",
    };
    // ACT
    const result: TriviaResponse = await getTrivia(query);
    const question: string = result.question;
    const choices: Array<string> = result.choices;
    const answer: string = result.answer;
    // ASSERT
    expect(question).toBeTruthy();
    expect(choices).toBeInstanceOf(Object);
    expect(answer).toBeNaN;
  });
});

// tests work individually but don't work when together
// my guess is that the requests are too often and getting blocked by the api
// https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple
