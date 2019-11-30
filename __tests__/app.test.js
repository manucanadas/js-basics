const { getDigits } = require("../js/app");

describe("tests app js helper functions", () => {
  it("gets the 10 digits", () => {
    const result = getDigits();
    expect(result.length).toBe(10);
    expect(result[0]).toBe(0);
    expect(result[result.length - 1]).toBe(9);
  });
});
