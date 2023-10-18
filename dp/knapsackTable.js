let weight = [1, 2, 3];
let value = [4, 5, 1];
let W = 5;
let N = weight.length;
let memo = Array(N + 1)
  .fill()
  .map((e) => Array(W + 1));

for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= W; j++) {
    if (i == 0 || j == 0) {
      memo[i][j] = 0;
    }
  }
}
console.log(memo);

function knapsackTable(value, weight, w, n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      if (weight[i - 1] <= j) {
        memo[i][j] = Math.max(
          value[i - 1] + memo[i - 1][j - weight[i - 1]],
          memo[i - 1][j]
        );
      } else {
        memo[i][j] = memo[i - 1][j];
      }
    }
  }
  return memo[n][w];
}
console.log(knapsackTable(value, weight, W, N));
console.log(memo);
