/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        let each = nums[i];
        let deducted = target - each;
        if(map.has(deducted)) {
            return [map.get(deducted), i]
        }
        else{
            map.set(each, i);
        }
    }
};

