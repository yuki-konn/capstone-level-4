import { Account } from "../models/Account";
import { updateAccount } from "./updateAccount";

describe("updateAccount function", () => {
  it("returns success message if account is updated.", async () => {
    // ARRANGE
    const account: Account = {
      email: "test3@email.com",
      password: "test3",
      userName: "testUser3",
      firstName: "Test3",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await updateAccount(account);
    // ASSERT
    expect(result).toBe("Your account has been updated.");
  });
  it("returns error message if email (partition key) is empty", async () => {
    // ARRANGE
    const account: Account = {
      email: "",
      password: "test3",
      userName: "testUser3",
      firstName: "Test3",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await updateAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account wasn't able to update because your email is undefined."
    );
  });
  it("returns error message when the email (partition key) is not in the list.", async () => {
    // ARRANGE
    const account: any = {
      email: "unlisted@email.com",
      password: "unlisted",
      userName: "TheUnlistedOne",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result: string = await updateAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account wasn't able to update because the email is not associated with any account."
    );
  });
  it("returns false when the email (partition key) is an object", async () => {
    // ARRANGE
    const account: Account = {
      email: {} as any,
      password: "test3",
      userName: "testUser3",
      firstName: "Test3",
      lastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result: string = await updateAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account wasn't able to update because your email is invalid."
    );
  });
  it("returns false when account is undefined", async () => {
    // ARRANGE
    const account: Account = undefined;
    // ACT
    const result: string = await updateAccount(account);
    // ASSERT
    expect(result).toBe(
      "Your account wasn't able to update because your account is undefined."
    );
  });
});
