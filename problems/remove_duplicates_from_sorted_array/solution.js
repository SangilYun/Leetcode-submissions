/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index=1;
    for(let i=0; i<nums.length; i++){
        if(nums[index-1] < nums[i]){
            nums[index++] = nums[i];
        }
    }
    return index; 
};