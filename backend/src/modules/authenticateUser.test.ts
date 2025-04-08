import { authenticateUser } from "./authenticateUser";

describe("authenticateUser function", () => {
  it("authenticates when email and password are correct", async () => {
    // ARRANGE
    const email = "test@email.com";
    const password = "test";
    // ACT
    const isAuthenticated = await authenticateUser(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(true);
    expect(isAuthenticated).toBeDefined;
  });
  it("doesn't authenticate when email is in the list, but the password is incorrect", async () => {
    // ARRANGE
    const email = "test@email.com";
    const password = "incorrect";
    // ACT
    const isAuthenticated = await authenticateUser(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(false);
    expect(isAuthenticated).toBeUndefined;
  });
  it("doesn't authenticate when the email is in the list, but the password is empty", async () => {
    // ARRANGE
    const email = "test@email.com";
    const password = "";
    // ACT
    const isAuthenticated = await authenticateUser(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(false);
    expect(isAuthenticated).toBeUndefined;
  });
  it("doesn't authenticates when email is not in the list", async () => {
    // ARRANGE
    const email = "notInList@email.com";
    const password = "test";
    // ACT
    const isAuthenticated = await authenticateUser(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(false);
    expect(isAuthenticated).toBeUndefined;
  });
});
