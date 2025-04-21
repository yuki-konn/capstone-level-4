import { deleteAccount } from "./deleteAccount";

describe("deleteAccount function", () => {
  it("returns true when httpStatusCode is 200 and account is delete successfully", async () => {
    // ARRANGE
    const email = "test3@email.com";
    // ACT
    const result = await deleteAccount(email);
    // ASSERT
    expect(result).toHaveProperty("$metadata.httpStatusCode", 200);
    expect(result).toBe(true);
  });
  it.skip("returns false when email (partition key) is not in the list", async () => {
    // ARRANGE
    const email = "notInList@email.com";
    // ACT
    const result = await deleteAccount(email);
    // ASSERT
    expect(result).toBe(false);
  });
  it.skip("returns false when email (partition key) is empty string", async () => {
    // ARRANGE
    const email = "";
    // ACT
    const result = await deleteAccount(email);
    // ASSERT
    expect(result).toBe(false);
  });
  it.skip("returns false when email (partition key) is an object", async () => {
    // ARRANGE
    const email = {};
    // ACT
    const result = await deleteAccount(email);
    // ASSERT
    expect(result).toBe(false);
  });
  it.skip("returns false when email (partition key) is undefined", async () => {
    // ARRANGE
    const email = undefined;
    // ACT
    const result = await deleteAccount(email);
    // ASSERT
    expect(result).toBe(false);
  });
});
