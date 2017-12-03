const solveCaptcha = captcha =>
  captcha
    .split('')
    .reduce((count, currentCharacter, index) => {
      const isLastChar = index === (captcha.length - 1);
      const nextCharIndex = isLastChar ? 0 : index + 1;
      const matches = currentCharacter === captcha[nextCharIndex];

      return count + (matches ? Number(currentCharacter) : 0);
    }, 0)
    .toString();

export default solveCaptcha;
