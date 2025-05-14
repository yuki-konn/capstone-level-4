import { Account } from "../models/Account";
import { createAccount } from "./createAccount";
import { deleteAccount } from "./deleteAccount";

describe("deleteAccount function", () => {
  it("returns error message when email (partition key) is in the list but password is incorrect", async () => {
    // ARRANGE
    const account: Account = {
      email: "delete@email.com",
      password: "wrong",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the password is incorrect."
    );
  });
  it("returns error message when email (partition key) is not in the list", async () => {
    // ARRANGE
    const account: Account = {
      email: "notInList@email.com",
      password: "deleteTest",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the email is not associated with any account."
    );
  });
  it("returns error message when email (partition key) is empty string or undefined", async () => {
    // ARRANGE
    const accountEmpty: Account = {
      email: "",
      password: "deleteTest",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    const accountUndefined: Account = {
      email: undefined,
      password: "deleteTest",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result1: string = await deleteAccount(accountEmpty);
    const result2: string = await deleteAccount(accountUndefined);
    // ASSERT
    expect(result1).toBe(
      "Your account was unable to be deleted because the email is empty or undefined."
    );
    expect(result2).toBe(
      "Your account was unable to be deleted because the email is empty or undefined."
    );
  });
  it("returns error message when email (partition key) is an object", async () => {
    // ARRANGE
    const account: Account = {
      email: {} as any,
      password: "deleteTest",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the email is an object."
    );
  });
  it("returns error message when account is undefined", async () => {
    // ARRANGE
    const account: Account = undefined;
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the account is undefined."
    );
  });
  it("returns success message when account is deleted successfully", async () => {
    // ARRANGE
    const account: Account = {
      email: "delete@email.com",
      password: "delete",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe("Your account has been deleted.");

    // CLEAN UP
    const newAccount = {
      email: "delete@email.com",
      password: "delete",
      userName: "delete",
      firstName: "",
      lastName: "",
      phone: "",
    };
    await createAccount(newAccount);
  });
});
