import solveCaptcha from './';

describe('solveCaptcha', () => {
  describe('returns the expected CAPTCHA for the given inputs', () => {
    it('returns 6 for input 1212', () =>  expect(solveCaptcha('1212')).toBe('6'));
    it('returns 0 for input 1221', () =>  expect(solveCaptcha('1221')).toBe('0'));
    it('returns 4 for input 123425', () =>  expect(solveCaptcha('123425')).toBe('4'));
    it('returns 4 for input 12131415', () =>  expect(solveCaptcha('12131415')).toBe('4'));
  });
});