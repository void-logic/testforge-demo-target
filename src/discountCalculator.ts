export function applyDiscountCode(
  subtotal: number,
  code: string
): { discount: number; reason: string } {
  const normalizedCode = code.trim().toUpperCase();

  if (normalizedCode === "WELCOME10") {
    return {
      discount: subtotal * 0.1,
      reason: "10% welcome discount applied",
    };
  }

  if (normalizedCode === "SAVE25" && subtotal >= 100) {
    return {
      discount: 25,
      reason: "Flat $25 discount applied",
    };
  }

  return {
    discount: 0,
    reason: "No valid discount applied",
  };
}
