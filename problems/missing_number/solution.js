/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //[3,0,1] -> 2
    //[1,3,2,5,0] -> 4
    //[0,1,2,4] -> 3
    //add up all the elements
    //count how many elements there are
    //substract
    let n = nums.length;
    let sum = nums.reduce((acc, curr) => acc+curr);
    let target = n*(n+1)/2;
    let missing = target - sum;
    return missing;
};