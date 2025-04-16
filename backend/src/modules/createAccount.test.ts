import { Account } from "./Account";
import { createAccount } from "./createAccount";

describe("createAccount function", () => {
  it("returns httpStatusCode 200", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "test3@email.com",
      password: "test3",
      userName: "testUser3",
      firstName: "Test",
      LastName: "Testing",
      phone: 1112223333,
    };
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBeDefined();
    expect(result).toHaveProperty("$metadata.httpStatusCode", 200);
  });
});
