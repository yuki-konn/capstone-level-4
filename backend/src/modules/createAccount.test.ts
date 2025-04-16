import { Account } from "./Account";
import { createAccount } from "./createAccount";

describe("createAccount function", () => {
  it("returns httpStatusCode: 200 and creates account when all fields are inputted. ", async () => {
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
    const result: Promise<any> = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeDefined();
    expect(result).toHaveProperty("$metadata.httpStatusCode", 200);
  });
  it("returns httpStatusCode: 200 and creates account when only email, password, and username are inputted. ", async () => {
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
    const result: Promise<any> = await createAccount(newAccount);
    // ASSERT
    expect(newAccount.email).toBeDefined();
    expect(newAccount.password).toBeDefined();
    expect(newAccount.userName).toBeDefined();
    expect(result).toHaveProperty("$metadata.httpStatusCode", 200);
  });
  it("returns a console.error and doesn't create account when all inputs are empty ", async () => {
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
    const result: Promise<any> = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeUndefined();
    expect(result).toBe(
      console.error(
        "Error: All input fields are empty. Unable to create account."
      )
    );
  });
  it("returns a console.error and doesn't create account when email or password is empty ", async () => {
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
    const result1: Promise<any> = await createAccount(newAccount1);
    const result2: Promise<any> = await createAccount(newAccount2);

    // ASSERT
    expect(newAccount1.email).toBe("");
    expect(result1).toBe(
      console.error(
        "Error: The email or password field is empty. Unable to create account."
      )
    );

    expect(newAccount2.password).toBe("");
    expect(result2).toBe(
      console.error(
        "Error: The email or password field is empty. Unable to create account."
      )
    );
  });
  it("returns a console.error and doesn't create account when object has no properties. ", async () => {
    // ARRANGE
    const newAccount: any = {};
    // ACT
    const result: Promise<any> = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeUndefined();
    expect(result).toBe(
      console.error(
        "Error: newAccount object has no properties. Unable to create account."
      )
    );
  });
  it("returns a console.error and doesn't create account when undefined. ", async () => {
    // ARRANGE
    const newAccount: Account = undefined;
    // ACT
    const result: Promise<any> = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeUndefined();
    expect(result).toBe(
      console.error("Error: newAccount is undefined. Unable to create account.")
    );
  });
});
