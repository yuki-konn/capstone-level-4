import { describe, expect, it } from "@jest/globals";
import { authenticationAws } from "./authenticationAws";

describe("The authenticationAws function", () => {
  it("authenticates when the email and password are correct", async () => {
    // ARRANGE
    const email = "capstone3@email.com";
    const password = "capstone3";
    // ACT
    const isAuthenticated = await authenticationAws(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(true);
  });

  // KIND OF REDUNDANT BECAUSE errorMessage PREVENTS THIS
  it("doesn't authenticate when email is correct, but the password is incorrect", async () => {
    // ARRANGE
    const email = "capstone3@email.com";
    const password = "incorrect";
    // ACT
    const isAuthenticated = await authenticationAws(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(false);
  });
  it("doesn't authenticate when email is not in the list", async () => {
    // ARRANGE
    const email = "notcapstone@email.com";
    const password = "capstone3";
    // ACT
    const isAuthenticated = await authenticationAws(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(false);
  });
  it("doesn't authenticate when the email is in the list, but the password is empty", async () => {
    // ARRANGE
    const email = "capstone3@email.com";
    const password = "";
    // ACT
    const isAuthenticated = await authenticationAws(email, password);
    // ASSERT
    expect(isAuthenticated).toBe(false);
  });
  // it("", async () => {});
});
