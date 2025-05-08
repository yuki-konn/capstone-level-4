import { Account } from "../../models/Account";
import { createAccount } from "./createAccount";

describe("createAccount function", () => {
  it("returns success message from backend when all inputs are provided", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "frontend@email.com",
      password: "frontend",
      userName: "frontend",
      firstName: "Front",
      lastName: "End",
      phone: 1112223333,
    };
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBe("Your account has been successfully created.");
  });
  it("returns success message from backend when only email, password, and userName are provided", async () => {
    // ARRANGE
    const newAccount: Account = {
      email: "frontend@email.com",
      password: "frontend",
      userName: "frontend",
      firstName: "",
      lastName: "",
      phone: "",
    };
    // ACT
    const result = await createAccount(newAccount);
    // ASSERT
    expect(result).toBe("Your account has been successfully created.");
  });
  it("returns error message from backend when all inputs are empty", async () => {
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
    expect(result).toBe(
      "Error: All input fields are empty. Unable to create account."
    );
  });
  it("returns error message from backend when email or password is empty", async () => {
    // ARRANGE
    const newAccount1: Account = {
      email: "",
      password: "frontend",
      userName: "frontend",
      firstName: "Front",
      lastName: "End",
      phone: 1112223333,
    };
    const newAccount2: Account = {
      email: "frontend@email.com",
      password: "",
      userName: "frontend",
      firstName: "Front",
      lastName: "End",
      phone: 1112223333,
    };
    // ACT
    const result1 = await createAccount(newAccount1);
    const result2 = await createAccount(newAccount2);
    // ASSERT
    expect(result1).toBe(
      "Error: The email or password field is empty. Unable to create account."
    );
    expect(result2).toBe(
      "Error: The email or password field is empty. Unable to create account."
    );
  });
  it("returns error message from backend when object has no properties.", async () => {
    // ARRANGE
    const newAccount = {};
    // ACT
    const result = await createAccount(newAccount as Account);
    // ASSERT
    expect(result).toBe(
      "Error: newAccount object has no properties. Unable to create account."
    );
  });
});
