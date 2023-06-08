import {
  PasswordChecker,
  PasswordErrors,
} from '../../src/passwordChecker/passwordChecker';

describe('password checker test suite', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  fit('password with less than 8 chars be invalid', () => {
    const actual = sut.checkPassword('1345567');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  fit('password with 8 or more chars be valid', () => {
    const actual = sut.checkPassword('12345678Ab');
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });

  fit('password with no uppercase letters be invalid', () => {
    const actual = sut.checkPassword('abcd134');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  fit('password with uppercase letters be valid', () => {
    const actual = sut.checkPassword('abcd134B');
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });

  fit('password with no lowercase letters be invalid', () => {
    const actual = sut.checkPassword('ABCD134');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  fit('password with lowercase letters be valid', () => {
    const actual = sut.checkPassword('ABCD134b');
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });

  fit('Complex password to be valid', () => {
    const actual = sut.checkPassword('aBcd12334');
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });
});
