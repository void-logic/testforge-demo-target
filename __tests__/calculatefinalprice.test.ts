import { calculateFinalPrice } from "../src/paymentService";

describe("calculateFinalPrice", () => {
  it("calculates final price with tax and discount", () => {
    const basePrice = 100;
    const taxRate = 0.1;
    const discount = 10;
    const result = calculateFinalPrice(basePrice, taxRate, discount);
    expect(result).toBe(100); // (100 + 10) - 10 = 100
  });

  it("throws an error for negative base price", () => {
    expect(() => calculateFinalPrice(-100, 0.1, 10)).toThrow(
      "Base price cannot be negative"
    );
  });

  it("handles zero discount correctly", () => {
    const basePrice = 100;
    const taxRate = 0.1;
    const discount = 0;
    const result = calculateFinalPrice(basePrice, taxRate, discount);
    expect(result).toBe(110); // 100 + (100 * 0.1) = 110
  });

  it("handles zero tax rate correctly", () => {
    const basePrice = 100;
    const taxRate = 0;
    const discount = 10;
    const result = calculateFinalPrice(basePrice, taxRate, discount);
    expect(result).toBe(90); // 100 - 10 = 90
  });

  it("calculates correctly with high tax rate", () => {
    const basePrice = 100;
    const taxRate = 0.25;
    const discount = 5;
    const result = calculateFinalPrice(basePrice, taxRate, discount);
    expect(result).toBe(120); // (100 + 25) - 5 = 120
  });
});