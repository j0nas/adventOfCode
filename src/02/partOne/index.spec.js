import { parseMatrixStringTo2dArray, get2dArrayChecksum } from "./";

describe('Corruption Checksum -- part one', () => {
  const matrix =
    "5 1 9 5\n" +
    "7 5 3\n" +
    "2 4 6 8";

  it('parses the matrix string into a 2d array', () =>
    expect(parseMatrixStringTo2dArray(matrix)).toEqual([
      ['5', '1', '9', '5'],
      ['7', '5', '3'],
      ['2', '4', '6', '8']
    ]));

  it('gets the expected checksum for the given input', () => {
    const matrixArray = parseMatrixStringTo2dArray(matrix);
    expect(get2dArrayChecksum(matrixArray)).toEqual(18);
  });
});