import { applyDiscountCode } from './discountCalculator';

describe("applyDiscountCode", () => {
  // Validates that a standard percentage discount is correctly subtracted from the total
  it("should apply a valid percentage discount correctly to the total amount", () => {
    const total = 100;
    const code = "SAVE20";
    const result = applyDiscountCode(total, code);
    expect(result).toBe(80);
  });

  // Validates behavior when the discount code provided does not exist in the system
  it("should return the original total when an unrecognized discount code is provided", () => {
    const total = 50;
    const code = "INVALID_CODE";
    const result = applyDiscountCode(total, code);
    expect(result).toBe(50);
  });

  // Validates that the function handles a total of zero without errors or incorrect calculations
  it("should return zero when the initial total is zero regardless of the discount code", () => {
    const total = 0;
    const code = "SAVE50";
    const result = applyDiscountCode(total, code);
    expect(result).toBe(0);
  });

  // Validates that the function throws an appropriate error when receiving invalid input types
  it("should throw an error if the total provided is a negative number", () => {
    const total = -10;
    const code = "SAVE10";
    expect(() => applyDiscountCode(total, code)).toThrow("Total cannot be negative");
  });
});