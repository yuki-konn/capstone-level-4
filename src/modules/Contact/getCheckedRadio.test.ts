import { describe, expect, it } from "@jest/globals";
import { getCheckedRadio } from "./getCheckedRadio";

describe("getCheckedRadio function", () => {
  it("tests loop to return '5 cups of tea!'", () => {
    // Arrange
    const event = {
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
    const event = {
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
  //   it("tests loop to return '3 cups of tea!'", () => {
  //     // Arrange
  //     const event = {
  //       preventDefault: () => {},
  //       target: [
  //         "0",
  //         "1",
  //         "2",
  //         { elements: [{ checked: true }] },
  //         { ariaLabel: "5 cups of tea!" },
  //         { ariaLabel: "4 cups of tea!" },
  //         { ariaLabel: "3 cups of tea!" },
  //         "7",
  //         "8",
  //       ],
  //     };
  //     const threeStar = event.target[6].ariaLabel;
  //     // Act
  //     const output = getCheckedRadio(threeStar);
  //     // Assert
  //     expect(output).toBe("3 cups of tea!");
  //   });
});
