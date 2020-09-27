/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length < 2) return nums;
    let i = nums.length-2;
    while(i>=0 && nums[i+1] <= nums[i]){
        i--;
    }
    let j = nums.length-1;
    if(i>=0){
        while(j >=0 && nums[j] <=nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i+1);
    return nums;
};

function reverse(arr, start){
    let left = start;
    let right = arr.length-1;
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left ++;
        right --;
    }
}