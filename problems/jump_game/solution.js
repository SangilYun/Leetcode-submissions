/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max =0;
    for(let i=0; i<nums.length; i++){
        max = Math.max(max, i+nums[i]);
        if(max >= nums.length-1) return true;
        if(max <= i && nums[i] ===0) return false;
    }
    console.log('max', max)
    
    return false;
};