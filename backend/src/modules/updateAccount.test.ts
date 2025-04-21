import { Account } from "./Account";
import { updateAccount } from "./updateAccount";

describe("updateAccount function", () => {
  it("returns httpStatusCode 200 if account is updated.", async () => {
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
    const result = await updateAccount(account);
    // ASSERT
    expect(result).toHaveProperty("$metadata.httpStatusCode", 200);
  });
  it("returns false if email (partition key) is empty", async () => {
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
    const result = await updateAccount(account);
    // ASSERT
    expect(result).toBe(false);
  });
  it("returns false when the email (partition key) is in the list but new attribute values are not in the list.", async () => {
    // ARRANGE
    const account: any = {
      email: "test3@email.com",
      forSale: true,
    };
    // ACT
    const result = await updateAccount(account);
    // ASSERT
    expect(result).toBe(false);
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
    const result = await updateAccount(account);
    // ASSERT
    expect(result).toBe(false);
  });
  it("returns false when account is undefined", async () => {
    // ARRANGE
    const account: Account = undefined;
    // ACT
    const result = await updateAccount(account);
    // ASSERT
    expect(result).toBe(false);
  });
});
