import { Account } from "./Account";
import { createAccount } from "./createAccount";

describe("createAccount function", () => {
  it("returns success message from backend when all inputs are provided", () => {
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
    const result = createAccount(newAccount);
    // ASSERT
    expect(result).toBe("Your account has been successfully created.");
  });
  it.skip("returns success message from backend when only email, password, and userName are provided", () => {
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
    const result = createAccount(newAccount);
    // ASSERT
    expect(result).toBe("Your account has been successfully created.");
  });
  it.skip("returns error message from backend when all inputs are empty", () => {
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
    const result = createAccount(newAccount);
    // ASSERT
    expect(result).toBe(
      "Error: All input fields are empty. Unable to create account."
    );
  });
  it.skip("returns error message from backend when email or password is empty", () => {
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
    const result1 = createAccount(newAccount1);
    const result2 = createAccount(newAccount2);
    // ASSERT
    expect(result1).toBe(
      "Error: The email or password field is empty. Unable to create account."
    );
    expect(result2).toBe(
      "Error: The email or password field is empty. Unable to create account."
    );
  });
  it.skip("returns error message from backend when object has no properties.", () => {
    // ARRANGE
    const newAccount: any = {};
    // ACT
    const result = createAccount(newAccount);
    // ASSERT
    expect(result).toBe(
      "Error: newAccount object has no properties. Unable to create account."
    );
  });
});
