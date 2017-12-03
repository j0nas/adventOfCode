export const parseMatrixStringTo2dArray = matrix =>
  matrix
    .split('\n')
    .map(row => row.split(/\s+/));

export const get2dArrayChecksum = matrix =>
  matrix.reduce(
    (totalSum, currentRow) => {
      const sortedNumbers = currentRow.map(Number).sort((a, b) => a - b);
      const largest = sortedNumbers[sortedNumbers.length - 1];
      const smallest = sortedNumbers[0];
      return totalSum + largest - smallest;
    }, 0);
