import { authenticationAws } from "./authenticationAws";

describe("The authenticationAws function", () => {
  it("returns an Account when given email and password are correct", async () => {
    // ARRANGE
    const email = "test@email.com";
    const password = "test";
    // ACT
    const result = await authenticationAws(email, password);
    // ASSERT
    expect(result).toBeDefined();
  });
  it("returns undefined when given email is correct, but password is incorrect", async () => {
    // ARRANGE
    const email = "test@email.com";
    const password = "incorrect";
    // ACT
    const result = await authenticationAws(email, password);
    // ASSERT
    expect(result).toBeUndefined();
  });
  it("returns undefined when email is not in the list", async () => {
    // ARRANGE
    const email = "notInList@email.com";
    const password = "test";
    // ACT
    const result = await authenticationAws(email, password);
    // ASSERT
    expect(result).toBeUndefined();
  });
  it("returns undefined when email or password is empty", async () => {
    // ARRANGE
    const email1 = "";
    const password1 = "test";
    const email2 = "test@email.com";
    const password2 = "";
    // ACT
    const result1 = await authenticationAws(email1, password1);
    const result2 = await authenticationAws(email2, password2);
    // ASSERT
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
  });
  // it("", async () => {});
});
