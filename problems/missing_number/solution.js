/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = (nums.length)*(nums.length+1)/2;
    let curr = nums.reduce((acc, curr) => acc+curr,0);
    return sum- curr;
    
};
