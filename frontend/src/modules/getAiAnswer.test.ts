import { getAiAnswer } from "./getAiAnswer";

describe("getAiAnswer", () => {
  it("returns a response when given a question and context", () => {
    // ARRANGE
    const question = "What tea has the most caffeine?";
    const context =
      "Out of the teas in the shop, Matcha tea has the most caffeine.";
    // ACT
    const answer = getAiAnswer(question, context);
    // ASSERT
    expect(answer).toBeDefined();
  });
  it("returns a correct answer when given a question and context", () => {
    // ARRANGE
    const question = "What tea has the most caffeine?";
    const context =
      "Out of the teas in the shop, Matcha tea has the most caffeine.";
    // ACT
    const answer = getAiAnswer(question, context);
    // ASSERT
    expect(answer).toBe("Matcha tea");
  });
  it("returns an error response when the answer is unknown", async () => {
    // ARRANGE
    const question = "What tea has the least caffeine?";
    const context =
      "Out of the teas in the shop, Matcha tea has the most caffeine.";
    // ACT
    const answer = await getAiAnswer(question, context);
    // ASSERT
    expect(answer).toBe("Sorry, I don't know");
  });
});
