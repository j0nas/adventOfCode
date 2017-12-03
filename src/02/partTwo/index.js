export const parseMatrixStringTo2dArray = matrix =>
  matrix
    .split('\n')
    .map(row => row.split(/\s+/));

export const get2dArrayChecksum = matrix =>
  matrix.reduce(
    (totalSum, currentRow) => {
      const sortedNumbers = currentRow
        .map(Number)
        .filter((currentNumber, index, numbersArray) => {
          const numbersExcludingCurrentIndex = [...numbersArray.slice(0, index), ...numbersArray.slice(index + 1)];
          return numbersExcludingCurrentIndex.some(otherNumber => {
            const largest = Math.max(currentNumber, otherNumber);
            const smallest = Math.min(otherNumber, currentNumber);
            return largest % smallest === 0;
          });
        })
        .sort((a, b) => a - b);

      const largest = sortedNumbers[sortedNumbers.length - 1];
      const smallest = sortedNumbers[0];
      return totalSum + (largest / smallest);
    }, 0);
