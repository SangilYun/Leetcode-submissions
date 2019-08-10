/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let l = nums.length;
    k %= l;
    reverse(nums, 0, l-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, l-1)
    return nums;
};

const reverse = (arr, start, end) =>{
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start ++;
        end --;    
    }
    
}