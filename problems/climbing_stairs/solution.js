/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return helper(n, []);
};

function helper(n, memo){
    if(n <0) return 0;
    if(n === 0) return 1;
    if(memo[n] > -1) return memo[n];
    memo[n] = helper(n-1, memo) + helper(n-2, memo);
    return memo[n];
}