import { PasswordChecker } from '../../src/passwordChecker/passwordChecker';

describe('password checker test suite', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it('password with less than 8 chars be invalid', () => {
    const actual = sut.checkPassword('1345567');
    expect(actual).toBe(false);
  });

  it('password with 8 or more chars be valid', () => {
    const actual = sut.checkPassword('12345678Ab');
    expect(actual).toBe(true);
  });

  it('password with no uppercase letters be invalid', () => {
    const actual = sut.checkPassword('abcd134');
    expect(actual).toBe(false);
  });

  it('password with uppercase letters be valid', () => {
    const actual = sut.checkPassword('abcd134B');
    expect(actual).toBe(true);
  });

  it('password with no lowercase letters be invalid', () => {
    const actual = sut.checkPassword('ABCD134');
    expect(actual).toBe(false);
  });

  it('password with lowercase letters be valid', () => {
    const actual = sut.checkPassword('ABCD134b');
    expect(actual).toBe(true);
  });
});
