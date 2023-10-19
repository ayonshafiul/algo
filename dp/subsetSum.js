let target = 1
let val = [2, 3, 3]
let N = val.length
let memo= Array(N + 1).fill().map((e) => Array(target + 1))

for(let i = 0; i <= N; i++) {
    for (let j = 0; j <= target; j++) {
        if(i == 0) {
            memo[i][j] = false
        }  
        if(j == 0) {
            memo[i][j] = true
        }
    }
}
function subsetSum(value, target, N) {
    for(let i = 1; i <= N; i++) {
        for (let j = 1; j <= target; j++) {
            if(value[i - 1] <= j) {
                memo[i][j] = memo[i - 1][j - value[i -1]] || memo[i -1][j]
            } else {
                memo[i][j] = memo[i-1][j]
            }
        }
    }
    return memo[N][target]
}
console.log(subsetSum(val, target, N))