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
  it.only("responds with the correct answer if it's in the context.", async () => {
    // ARRANGE
    const question1 = "Which tea has the most caffeine?";
    const question2 = "Which tea has the 2nd most caffeine?";
    const question3 = "Which teas are caffeine-free?";
    const context = aiContext;
    // ACT
    const response1 = await getAnswer(question1, context);
    const response2 = await getAnswer(question2, context);
    const response3 = await getAnswer(question3, context);
    // ASSERT
    expect(response1).toBe("Matcha tea");
    expect(response2).toBe("Pu - erh");
    expect(response3).toBe("rooibos and herbal");
  });
  it("doesn't respond with an answer if it's not in the context.", async () => {
    // ARRANGE
    const question = "What is T?";
    const context = aiContext;
    // ACT
    const response = await getAnswer(question, context);
    // ASSERT
    expect(response).toBeUndefined();
  });
  it("doesn't respond with an answer if there's no question.", async () => {
    // ARRANGE
    const question = "";
    const context = aiContext;
    // ACT
    const response = await getAnswer(question, context);
    // ASSERT
    expect(response).toBeUndefined();
  });
  it("doesn't respond with an answer if there's no context.", async () => {
    // ARRANGE
    const question = "Which tea has the most caffeine?";
    const context = "";
    // ACT
    const response = await getAnswer(question, context);
    // ASSERT
    expect(response).toBeUndefined();
  });
  it("doesn't respond with an answer if there's no question and no context.", async () => {
    // ARRANGE
    const question = "";
    const context = "";
    // ACT
    const response = await getAnswer(question, context);
    // ASSERT
    expect(response).toBeUndefined();
  });
  it("doesn't respond with an answer if either the question or context are empty strings.", async () => {
    // ARRANGE
    const question = "";
    const context = "";
    // ACT
    const response1 = await getAnswer(question, "placeholder context");
    const response2 = await getAnswer("placeholder question", context);
    // ASSERT
    expect(response1).toBeUndefined();
    expect(response2).toBeUndefined();
  });
});
