import { aiContext } from "./AiContext";
import { getAnswer } from "./getAnswer";

describe("getAnswer", { timeout: 100000 }, () => {
  it("accepts a question and a context and returns a response.", async () => {
    // ARRANGE
    const question = "Which tea has the most caffeine?";
    const context = aiContext;
    // ACT
    const response = await getAnswer(question, context);
    // ASSERT
    expect(response).toBeDefined();
  });
  it("responds with the correct answer if it's in the context.", async () => {
    // ARRANGE
    const question = "Which tea has the most caffeine?";
    const context = aiContext;
    // ACT
    const response = await getAnswer(question, context);
    // ASSERT
    expect(response).toBe("Matcha tea");
  });
  //   it("doesn't response with an answer if it's not in the context.", async () => {});
  //   it("doesn't respond with an answer if there's no question.", async () => {});
  //   it("doesn't response with an answer if there's no context.", async () => {});
  //   it("doesn't response with an answer if there's no question and no context.", async () => {});
  //   it("doesn't response with an answer if either the question or context are empty strings.", async () => {});
});
