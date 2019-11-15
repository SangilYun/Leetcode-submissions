/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum =-Number.MAX_VALUE;
    let temp =-Number.MAX_VALUE;
    for(let i=0; i<nums.length; i++){
        temp = Math.max(temp+ nums[i], nums[i]);
        sum = temp > sum ? temp : sum;
    }
    return sum;
    
};