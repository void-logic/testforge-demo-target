import { applyDiscountCode } from './discountCalculator';

describe("applyDiscountCode", () => {
  // Validates that a standard valid discount code correctly reduces the total price
  it("should apply a valid percentage discount to the total price", () => {
    const originalPrice = 100;
    const discountCode = "SUMMER20"; // Assuming 20% off
    const result = applyDiscountCode(originalPrice, discountCode);
    expect(result).toBe(80);
  });

  // Validates that the function handles a price of zero correctly without errors
  it("should return zero when the original price is zero", () => {
    const originalPrice = 0;
    const discountCode = "SUMMER20";
    const result = applyDiscountCode(originalPrice, discountCode);
    expect(result).toBe(0);
  });

  // Validates that the resulting price is never negative even if the discount exceeds the price
  it("should return zero and not a negative value if the discount exceeds the price", () => {
    const originalPrice = 10;
    const discountCode = "FLAT50OFF"; // Assuming $50 off
    const result = applyDiscountCode(originalPrice, discountCode);
    expect(result).toBe(0);
  });

  // Validates that the function throws a specific error when an unrecognized code is used
  it("should throw an Error when an invalid or expired discount code is provided", () => {
    const originalPrice = 100;
    const invalidCode = "INVALID_CODE_123";
    expect(() => {
      applyDiscountCode(originalPrice, invalidCode);
    }).toThrow("Invalid discount code");
  });
});