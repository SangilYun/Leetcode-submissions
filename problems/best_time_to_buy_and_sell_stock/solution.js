/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minVal = prices[0];
    let profit = 0;
    for(let i=1; i<prices.length; i++){
        if(minVal > prices[i]){
            minVal = prices[i]
        }else{
            profit = Math.max(profit, prices[i]-minVal);
        };
    }
    return profit;
};