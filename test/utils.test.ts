import { toUpperCase, getStringInfo, StringUtils } from '../src/utils';

// describe combines multiple tests
describe('utils tests suite', () => {
  it('should return the uppecase of valid string', () => {
    /************************
     * arrange
     */
    const sut = toUpperCase;
    const expected = 'ABC';

    /************************
     * act
     */
    const actual = sut('abc');

    /************************
     * assert
     */
    expect(actual).toBe(expected);
  });

  describe('getStringInfo for arg My-String should ', () => {
    // remove code duplicacy using beforeEach jest hook
    // let actual: stringInfo;
    // beforeEach(() => {
    //   /************************
    //    * act
    //    */
    //   actual = getStringInfo('My-String');
    // });

    it('return right length', () => {
      /************************
       * act
       */
      const actual = getStringInfo('My-String');

      /************************
       * assert
       */
      expect(actual.characters.length).toBe(9);
      expect(actual.characters).toHaveLength(9);
    });

    it('return lowercase str', () => {
      /************************
       * act
       */
      const actual = getStringInfo('My-String');

      /************************
       * assert
       */
      // toBe used for primitive types
      expect(actual.lowerCase).toBe('my-string');
    });

    it('return empty object', () => {
      /************************
       * act
       */
      const actual = getStringInfo('My-String');

      /************************
       * assert
       */
      // toEqual used for objects
      expect(actual.extraInfo).toEqual({});
    });

    it('return right characters', () => {
      /************************
       * act
       */
      const actual = getStringInfo('My-String');

      /************************
       * assert
       */
      // toEqual used for objects
      // checking chars array
      expect(actual.characters).toEqual([
        'M',
        'y',
        '-',
        'S',
        't',
        'r',
        'i',
        'n',
        'g',
      ]);
      expect(actual.characters).toContain<string>('M');
      // while checking the arrays order does not matter
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
      );
    });

    it('return defined extra info', () => {
      /************************
       * act
       */
      const actual = getStringInfo('My-String');

      /************************
       * assert
       */
      // checking whether undefined
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });

  // paramaterized tests
  describe('ToUpperCase examples ', () => {
    it.each([
      {
        input: 'abc',
        expected: 'ABC',
      },
      {
        input: 'kiran',
        expected: 'KIRAN',
      },
      {
        input: 'def',
        expected: 'DEF',
      },
      {
        input: 'me>',
        expected: 'ME>',
      },
    ])('$input should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  // using jest hooks
  describe('StringUtils tests', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      // console.log('Setup');
    });

    afterEach(() => {
      // clearing mocks
      // console.log('Teardown');
    });

    it('Should return correct upperCase', () => {
      const actual = sut.toUpperCase('abc');

      expect(actual).toBe('ABC');
      // console.log('Actual test');
    });

    it('Should throw error on no arg', () => {
      function expectedError() {
        const actual = sut.toUpperCase('');
      }

      expect(expectedError).toThrow();
      expect(expectedError).toThrow('Invalid argument!');
    });

    it('Should throw error on no arg using arrow function', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrowError('Invalid argument!');
    });

    // Issue with the jest: https://github.com/jestjs/jest/issues/11698
    it('Should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        done('GetStringInfo should throw error for invalid arg!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }
    });
  });
});
