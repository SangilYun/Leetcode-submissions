/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0) return 0;
    if(nums.length===1) return nums[0];
    let dp = [];
    for(let i=0; i<nums.length; i++){
        if(i<2){
            dp.push(nums[i]);
        }else if(i === 2){
            dp.push(nums[i] + dp[i-2]);
        }
        else{
            dp.push(Math.max(nums[i]+ dp[i-2], nums[i]+ dp[i-3]))
        }
    }
    return Math.max(dp[dp.length-1], dp[dp.length-2]);
};