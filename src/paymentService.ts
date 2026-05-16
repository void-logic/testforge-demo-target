export function calculateFinalPrice(
  subtotal: number,
  taxRate: number,
  discount: number = 0
): number {
  if (subtotal < 0) {
    throw new Error("Subtotal cannot be negative");
  }

  if (taxRate < 0 || taxRate > 1) {
    throw new Error("Tax rate must be between 0 and 1");
  }

  const discountedSubtotal = subtotal - discount;

  if (discountedSubtotal < 0) {
    return 0;
  }

  return Number((discountedSubtotal * (1 + taxRate)).toFixed(2));
}
