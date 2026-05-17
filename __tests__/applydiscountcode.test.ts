import { applyDiscountCode } from './discountCalculator';

describe("applyDiscountCode", () => {
  // Validates that a standard 10% discount is applied correctly to a positive amount
  it("should apply a valid percentage discount correctly", () => {
    const price = 100;
    const code = "SAVE10";
    const expected =