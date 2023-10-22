let val = [1, 2, 3, 4, 6];
let target = 8;
let N = val.length;
function countSubsetSum(value, target, N) {
  let memo = Array(N + 1)
    .fill()
    .map((e) => Array(target + 1));
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= target; j++) {
      if (i == 0) {
        memo[i][j] = 0;
      }
      if (j == 0) {
        memo[i][j] = 1;
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= target; j++) {
      if (value[i - 1] <= j) {
        memo[i][j] = memo[i - 1][j - value[i - 1]] + memo[i - 1][j];
      } else {
        memo[i][j] = memo[i - 1][j];
      }
    }
  }
  return memo[N][target];
}

console.log(countSubsetSum(val, target, N));
