import { Account } from "../models/Account";
import { createAccount } from "./createAccount";
import { deleteAccount } from "./deleteAccount";

describe("createAccount function", () => {
  it("returns message and creates account when all fields are inputted. ", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "test5@email.com",
      password: "test5",
      userName: "testUser5",
      firstName: "Test",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBe("Your account has been successfully created.");

    // CLEANUP
    await deleteAccount(newAccount);
  });
  it("returns message and creates account when only email, password, and username are inputted. ", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "test6@email.com",
      password: "test6",
      userName: "testUser6",
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
    // CLEANUP
    await deleteAccount(newAccount);
  });
  it("returns undefined and doesn't create account when all inputs are empty ", async () => {
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
    expect(result).toBeUndefined();
  });
  it("returns undefined and doesn't create account when email or password is empty ", async () => {
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
    expect(result1).toBeUndefined();

    expect(newAccount2.password).toBe("");
    expect(result2).toBeUndefined();
  });
  it("returns undefined and doesn't create account when object has no properties. ", async () => {
    // ARRANGE
    const newAccount: any = {};
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeUndefined();
  });
  it("returns undefined and doesn't create account when undefined. ", async () => {
    // ARRANGE
    const newAccount: Account = undefined;
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeUndefined();
  });
  it("returns undefined when email is not avaiable (already in database). ", async () => {
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
    expect(result).toBeUndefined();
  });
});
