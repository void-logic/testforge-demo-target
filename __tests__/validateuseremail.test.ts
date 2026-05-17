import { validateUserEmail } from './userValidator';

describe('validateUserEmail', () => {
  // Validates a standard happy-path scenario with a common email format
  it('should return true for a standard valid email address', () => {
    const email = 'john.doe@example.com';
    const result = validateUserEmail(email);
    expect(result).toBe(true);
  });

  // Validates edge case: emails with tags (plus sign) and multiple subdomains
  it('should return true for valid emails with plus tags and multiple subdomains', () => {
    const email = 'dev.user+filter@mail.sub.domain.org';
    const result = validateUserEmail(email);
    expect(result).toBe(true);
  });

  // Validates edge case: rejection of strings that do not follow basic email structure
  it('should return false for an email missing the domain part', () => {
    const email = 'username@';
    const result = validateUserEmail(email);
    expect(result).toBe(false);
  });

  // Validates error handling: ensures the function handles non-string inputs gracefully
  it('should throw an error if the input is null or undefined', () => {
    const invalidInput: any = null;
    expect(() => {
      validateUserEmail(invalidInput);
    }).toThrow();
  });
});