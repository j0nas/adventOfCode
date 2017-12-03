const solveCaptcha = captcha =>
  captcha
    .split('')
    .reduce((count, currentCharacter, index) => {
      const indexPlusHalfLength = captcha.length / 2;
      const isOverflow = (index + indexPlusHalfLength + 1) > captcha.length;
      const nextCharIndex = (index + indexPlusHalfLength) - (isOverflow ? captcha.length : 0);
      const matches = currentCharacter === captcha[nextCharIndex];

      return count + (matches ? Number(currentCharacter) : 0);
    }, 0)
    .toString();

export default solveCaptcha;