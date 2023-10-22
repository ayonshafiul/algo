let weight = [1, 2, 3];
let value = [4, 5, 1];
let W = 5;
let N = weight.length;
let memo = Array(N + 1)
  .fill()
  .map((e) => Array(W + 1));

function knapsack(value, weight, w, n, memo) {
  if (n == 0 || w == 0) {
    return 0;
  }
  if (memo[n][w]) return memo[n][w];
  if (weight[n - 1] <= w) {
    memo[n][w] = Math.max(
      value[n - 1] + knapsack(value, weight, w - weight[n - 1], n - 1, memo),
      knapsack(value, weight, w, n - 1, memo)
    );
  } else {
    memo[n][w] = knapsack(value, weight, w, n - 1, memo);
  }
  return memo[n][w];
}

console.log(knapsack(value, weight, W, N, memo));
