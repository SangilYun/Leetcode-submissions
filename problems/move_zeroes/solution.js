/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){
            nums[nonZeroIndex++] = nums[i];
        }
    }
    for(let i=nonZeroIndex; i<nums.length; i++){
        nums[i] = 0;
    }
    return nums;
}