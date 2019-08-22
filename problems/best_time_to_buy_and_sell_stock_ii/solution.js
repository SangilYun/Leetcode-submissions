/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for(let i=1; i<prices.length; i++){
        max += Math.max(0, prices[i]-prices[i-1]);
    }
    return max;
};