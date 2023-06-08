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
});
