import solveCaptcha from './';

describe('solveCaptcha', () => {
  describe('returns the expected CAPTCHA for the given inputs', () => {
    it('returns 3 for input 1122', () =>  expect(solveCaptcha('1122')).toBe('3'));
    it('returns 4 for input 1111', () =>  expect(solveCaptcha('1111')).toBe('4'));
    it('returns 0 for input 1234', () =>  expect(solveCaptcha('1234')).toBe('0'));
    it('returns 9 for input 91212129', () =>  expect(solveCaptcha('91212129')).toBe('9'));
  });
});