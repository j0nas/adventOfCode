import { parseMatrixStringTo2dArray, get2dArrayChecksum } from "./";

describe('Corruption Checksum -- part two', () => {
  const matrix =
    "5 9 2 8\n" +
    "9 4 7 3\n" +
    "3 8 6 5";

  it('gets the expected checksum for the given input', () => {
    const matrixArray = parseMatrixStringTo2dArray(matrix);
    expect(get2dArrayChecksum(matrixArray)).toEqual(9);
  });
});