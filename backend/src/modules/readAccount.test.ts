import { Account } from "./Account";
import { readAccount } from "./readAccount";

describe("readAccount function", () => {
  it("returns an email, password, userName, firstName, lastName and phone when given an matching email and password", async () => {
    // ARRANGE
    const account: Account = {
      email: "test3@email.com",
      password: "test3",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result = await readAccount(account);
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
    const account: Account = {
      email: "test3@email.com",
      password: "test3",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result = await readAccount(account);
    // ASSERT
    expect(result.email).toBe(account.email);
    expect(result.password).toBe(account.password);
  });
  it("doesn't return a result when the email is not in the list", async () => {
    // ARRANGE
    const account: Account = {
      email: "not@email.com",
      password: "test",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const response = await readAccount(account);
    // ASSERT
    expect(response).toBeUndefined();
  });
  it("doesn't return a result when the email or password is an object", async () => {
    // ARRANGE
    const account1: Account = {
      email: {} as any,
      password: "test",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    const account2: Account = {
      email: "test3@email.com",
      password: {} as any,
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const response1 = await readAccount(account1);
    const response2 = await readAccount(account2);
    // ASSERT
    expect(response1).toBeUndefined();
    expect(response2).toBeUndefined();
  });
  it("doesn't return a result when the email or password is undefined", async () => {
    // ARRANGE
    const account1: Account = {
      email: undefined as any,
      password: "test",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    const account2: Account = {
      email: "test3@email.com",
      password: undefined as any,
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const response1 = await readAccount(account1);
    const response2 = await readAccount(account2);
    // ASSERT
    expect(response1).toBeUndefined();
    expect(response2).toBeUndefined();
  });
});
