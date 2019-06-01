/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNumber =0;
    for(i of nums){
        singleNumber ^= i;
    }
    return singleNumber
};