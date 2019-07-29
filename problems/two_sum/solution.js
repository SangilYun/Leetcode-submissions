/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ht = new Map();
    for(let i=0; i< nums.length; i++){
        let diff = target - nums[i];
        if(ht.has(diff)){
            return [ht.get(diff), i];
        }
        ht.set(nums[i], i)
    }
    return [];
};