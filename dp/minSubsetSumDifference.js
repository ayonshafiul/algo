let val = [1, 2, 7];

function minSubsetSumDifference(arr) {
  let total = arr.reduce((acc, v) => acc + v, 0);
  let half = Math.floor(total / 2);
  let N = arr.length;
  let memo = Array(N + 1)
    .fill()
    .map((_) => Array(half + 1).fill(null));
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= half; j++) {
      if (i == 0) {
        memo[i][j] = false;
      }
      if (j == 0) {
        memo[i][j] = true;
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= half; j++) {
      if (arr[i - 1] <= j) {
        memo[i][j] = memo[i - 1][j - arr[i - 1]] || memo[i - 1][j];
      } else {
        memo[i][j] = memo[i - 1][j];
      }
    }
  }
  let min = Infinity;
  for (let j = 0; j <= half; j++) {
    if (memo[N][j]) {
      min = Math.min(total - 2 * j, min);
    }
  }
  return min;
}

console.log(minSubsetSumDifference(val));
