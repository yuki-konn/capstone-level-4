import { Account } from "../models/Account";
import { readAccount } from "./readAccount";

describe("readAccount function", () => {
  it("returns an email, password, userName, firstName, lastName and phone when given an matching email and password", async () => {
    // ARRANGE
    const email = "test3@email.com";
    const password = "test3";
    // ACT
    const result = await readAccount(email, password);
    // ASSERT
    expect(result).toHaveProperty("email");
    expect(result).toHaveProperty("password");
    expect(result).toHaveProperty("userName");
    expect(result).toHaveProperty("firstName");
    expect(result).toHaveProperty("lastName");
    expect(result).toHaveProperty("phone");
  });
  it("returns a email and password when given email and password are correct", async () => {
    // ARRANGE
    const email = "test3@email.com";
    const password = "test3";
    // ACT
    const result = (await readAccount(email, password)) as Account;
    // ASSERT
    expect(result.email).toBe(email);
    expect(result.password).toBe(password);
  });
  it("returns an error message when the email is in the list, but password is incorrect.", async () => {
    // ARRANGE
    const email = "test3@email.com";
    const password = "wrongPassword";
    // ACT
    const result = await readAccount(email, password);
    // ASSERT
    expect(result).toBe("Provided password is inccorect.");
  });
  it("returns an error message when the email is not in the list", async () => {
    // ARRANGE
    const email = "not@email.com";
    const password = "test";
    // ACT
    const result = await readAccount(email, password);
    // ASSERT
    expect(result).toBe("This email is not associated with any account.");
  });
  it("returns an error message when the email or password is an object", async () => {
    // ARRANGE
    const email1 = {} as any;
    const password1 = "test3";
    const email2 = "test3@email.com";
    const password2 = {} as any;
    // ACT
    const result1 = await readAccount(email1, password1);
    const result2 = await readAccount(email2, password2);
    // ASSERT
    expect(result1).toBe("Provided email or password is invalid.");
    expect(result2).toBe("Provided email or password is invalid.");
  });
  it("returns an error message when the email or password is undefined", async () => {
    // ARRANGE
    const email1 = undefined;
    const password1 = "test3";
    const email2 = "test3@email.com";
    const password2 = undefined;
    // ACT
    const result1 = await readAccount(email1, password1);
    const result2 = await readAccount(email2, password2);
    // ASSERT
    expect(result1).toBe("Provided email or password is invalid.");
    expect(result2).toBe("Provided email or password is invalid.");
  });
});
