import { Account } from "../models/Account";
import { createAccount } from "./createAccount";

describe("createAccount function", () => {
  it("returns message and creates account when all fields are inputted. ", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "test3@email.com",
      password: "test3",
      userName: "testUser3",
      firstName: "Test",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeDefined();
    expect(result).toBe("Your account has been successfully created.");
  });
  it("returns message and creates account when only email, password, and username are inputted. ", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "test3@email.com",
      password: "test3",
      userName: "testUser3",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(newAccount.email).toBeDefined();
    expect(newAccount.password).toBeDefined();
    expect(newAccount.userName).toBeDefined();
    expect(result).toBe("Your account has been successfully created.");
  });
  it("returns a error message and doesn't create account when all inputs are empty ", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "",
      password: "",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeDefined();
    expect(result).toBe(
      "Error: All input fields are empty. Unable to create account."
    );
  });
  it("returns a error message and doesn't create account when email or password is empty ", async () => {
    // ARRANGE
    const newAccount1: Account = {
      email: "",
      password: "test3",
      userName: "testUser3",
      firstName: "Test",
      lastName: "Testing",
      phone: 1112223333,
    };
    const newAccount2: Account = {
      email: "test3@email.com",
      password: "",
      userName: "testUser3",
      firstName: "Test",
      lastName: "Testing",
      phone: 1112223333,
    };

    // ACT
    const result1 = await createAccount(newAccount1);
    const result2 = await createAccount(newAccount2);

    // ASSERT
    expect(newAccount1.email).toBe("");
    expect(result1).toBe(
      "Error: The email or password field is empty. Unable to create account."
    );

    expect(newAccount2.password).toBe("");
    expect(result2).toBe(
      "Error: The email or password field is empty. Unable to create account."
    );
  });
  it("returns a error message and doesn't create account when object has no properties. ", async () => {
    // ARRANGE
    const newAccount: any = {};
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeDefined();
    expect(result).toBe(
      "Error: newAccount object has no properties. Unable to create account."
    );
  });
  it("returns a error message and doesn't create account when undefined. ", async () => {
    // ARRANGE
    const newAccount: Account = undefined;
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeDefined();
    expect(result).toBe(
      "Error: newAccount is undefined. Unable to create account."
    );
  });
});
