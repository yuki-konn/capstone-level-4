import { Account } from "./Account";
import { deleteAccount } from "./deleteAccount";

describe("deleteAccount function", () => {
  it("returns success message when account is delete successfully", async () => {
    // ARRANGE
    const account: Account = {
      email: "deleteTest@email.com",
      password: "deleteTest",
      userName: "deleteTest",
      firstName: "deleteTest",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe("Your account has been deleted.");
  });
  it("returns error message when email (partition key) is not in the list", async () => {
    // ARRANGE
    const account: Account = {
      email: "notInList@email.com",
      password: "deleteTest",
      userName: "deleteTest",
      firstName: "deleteTest",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the email is not associated with any account."
    );
  });
  it("returns error message when email (partition key) is empty string", async () => {
    // ARRANGE
    const account: Account = {
      email: "",
      password: "deleteTest",
      userName: "deleteTest",
      firstName: "deleteTest",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the email is empty."
    );
  });
  it("returns error message when email (partition key) is an object", async () => {
    // ARRANGE
    const account: Account = {
      email: {} as any,
      password: "deleteTest",
      userName: "deleteTest",
      firstName: "deleteTest",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the email is an object."
    );
  });
  it("returns error message when email (partition key) is undefined", async () => {
    // ARRANGE
    const account: Account = {
      email: undefined,
      password: "deleteTest",
      userName: "deleteTest",
      firstName: "deleteTest",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await deleteAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account was unable to be deleted because the email is undefined."
    );
  });
});
