import { Account } from "../../models/Account";
import { readAccount } from "./readAccount";

describe("readAccount function", () => {
  it("returns email, password, userName, firstName, lastName and phone when matching email and password is provided.", async () => {
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
  it("returns an error message when email is not in the list", async () => {
    // ARRANGE
    const account: Account = {
      email: "notInList@email.com",
      password: "test3",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result = await readAccount(account);
    // ASSERT
    expect(result).toBe("This email is not associated with any account.");
  });
  it("returns an error message when email is in the list but password doesn't match", async () => {
    // ARRANGE
    const account: Account = {
      email: "test3@email.com",
      password: "notmatch",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result = await readAccount(account);
    // ASSERT
    expect(result).toBe("The provided password is incorrect.");
  });
  it("returns an error message when email or password is an object", async () => {
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
    expect(response1).toBe("Provided email or password is invalid.");
    expect(response2).toBe("Provided email or password is invalid.");
  });
  it("returns an error message when email or password is undefined", async () => {
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
    expect(response1).toBe("Provided email or password is invalid.");
    expect(response2).toBe("Provided email or password is invalid.");
  });
});
