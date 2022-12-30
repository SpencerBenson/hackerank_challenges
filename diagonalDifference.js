function diagonalDifference(arr) {
  // Initialize variables to store the sums of the diagonals
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  // Iterate over the rows of the matrix
  for (let i = 0; i < arr.length; i++) {
    // Add the element at the current row and column to the primary diagonal sum
    primaryDiagonalSum += arr[i][i];
    // Add the element at the current row and the opposite column to the secondary diagonal sum
    secondaryDiagonalSum += arr[i][arr.length - 1 - i];
  }

  // Calculate and return the absolute difference between the sums of the diagonals
  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}
const arr = [[1, 2, 3],
[4, 5, 6],
[9, 8, 9 ]]
console.log(diagonalDifference(arr))