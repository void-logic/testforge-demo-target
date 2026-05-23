import { validateUserEmail } from './userValidator';

describe("validateUserEmail", () => {
  // Validates that a standard, well-formatted email returns true
  it("should return true for a standard valid email address", () => {
    const email = "test.user@example.com";
    const result = validateUserEmail(email);
    expect(result).toBe(true);
  });

  // Validates that complex but valid email structures including subdomains and tags are accepted
  it("should return true for emails containing plus signs and multiple subdomains", () => {
    const complexEmail = "dev.work+filter@mail.staging.service.io";
    const result = validateUserEmail(complexEmail);
    expect(result).toBe(true);
  });

  // Validates that strings missing essential components like the @ symbol or TLD are rejected
  it("should return false for malformed strings that lack standard email structure", () => {
    const invalidEmails = [
      "plainaddress",
      "@missingprefix.com",
      "user@domain",
      "user@.com",
      "user@domain..com"
    ];
    invalidEmails.forEach(email => {
      expect(validateUserEmail(email)).toBe(false);
    });
  });

  // Validates that the function handles null or undefined input by throwing a descriptive error
  it("should throw an error if the input is null or undefined", () => {
    // @ts-ignore: Testing runtime behavior for invalid types
    expect(() => validateUserEmail(null)).toThrow("Email input is required");
    // @ts-ignore: Testing runtime behavior for invalid types
    expect(() => validateUserEmail(undefined)).toThrow("Email input is required");
  });
});