
// math.test.js
const sum = require("./math");

describe("sum function", () => {
  test("should add 1 + 2 to equal 3", () => {
    // Arrange
    const a = 1;
    const b = 2;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(3);
  });

  // test()....
});



