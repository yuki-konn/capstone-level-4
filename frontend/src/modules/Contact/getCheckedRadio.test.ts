import { getCheckedRadio } from "./getCheckedRadio";

describe("getCheckedRadio function", () => {
  it("tests loop to return '5 cups of tea!'", () => {
    // Arrange
    const event: any = {
      preventDefault: () => {},
      target: [
        "0",
        "1",
        "2",
        { elements: [{ checked: true }] },
        { ariaLabel: "5 cups of tea!" },
        "5",
        "6",
        "7",
        "8",
      ],
    };
    // Act
    const output = getCheckedRadio(event);
    // Assert
    expect(output).toBe("5 cups of tea!");
  });
  it("tests loop to return '4 cups of tea!'", () => {
    // Arrange
    const event: any = {
      preventDefault: () => {},
      target: [
        "0",
        "1",
        "2",
        { elements: [{ checked: true }] },
        "5",
        { ariaLabel: "4 cups of tea!" },
        "6",
        "7",
        "8",
      ],
    };
    // Act
    const output = getCheckedRadio(event);
    debugger;
    // Assert
    expect(output).toBe("4 cups of tea!");
  });
});
