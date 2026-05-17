import { applyDiscountCode } from "../src/discountCalculator";

describe("applyDiscountCode", () => {
  // SAVE10 applies a 10% discount
  it("should apply a 10% discount for SAVE10", () => {
    expect(applyDiscountCode(100, "SAVE10")).toBe(90);
  });

  // SAVE20 applies a 20% discount
  it("should apply a 20% discount for SAVE20", () => {
    expect(applyDiscountCode(100, "SAVE20")).toBe(80);
  });

  // An unknown code leaves the price unchanged
  it("should return the original price for an invalid code", () => {
    expect(applyDiscountCode(100, "INVALID")).toBe(100);
  });

  // A zero price stays zero regardless of discount
  it("should handle a zero price without error", () => {
    expect(applyDiscountCode(0, "SAVE10")).toBe(0);
  });

  // An empty code string leaves the price unchanged
  it("should return full price for an empty code", () => {
    expect(applyDiscountCode(100, "")).toBe(100);
  });
});