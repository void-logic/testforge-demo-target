import { calculateFinalPrice } from "../src/paymentService";

describe("calculateFinalPrice", () => {
  it("calculates final price with tax and discount", () => {
    const subtotal = 100;
    const taxRate = 0.1;
    const discount = 10;
    const result = calculateFinalPrice(subtotal, taxRate, discount);
    expect(result).toBe(99); // (100 - 10) * 1.1 = 99.00
  });

  it("throws an error for negative subtotal", () => {
    expect(() => calculateFinalPrice(-100, 0.1, 10)).toThrow(
      "Subtotal cannot be negative"
    );
  });

  it("handles zero discount correctly", () => {
    const subtotal = 100;
    const taxRate = 0.1;
    const discount = 0;
    const result = calculateFinalPrice(subtotal, taxRate, discount);
    expect(result).toBe(110); // (100 - 0) * 1.1 = 110.00
  });

  it("handles zero tax rate correctly", () => {
    const subtotal = 100;
    const taxRate = 0;
    const discount = 10;
    const result = calculateFinalPrice(subtotal, taxRate, discount);
    expect(result).toBe(90); // (100 - 10) * 1.0 = 90.00
  });

  it("calculates correctly with high tax rate", () => {
    const subtotal = 100;
    const taxRate = 0.25;
    const discount = 5;
    const result = calculateFinalPrice(subtotal, taxRate, discount);
    expect(result).toBe(118.75); // (100 - 5) * 1.25 = 118.75
  });
});