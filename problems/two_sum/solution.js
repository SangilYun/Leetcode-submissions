/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let table = {};
    let answer = [];
    for(let i=0; i<nums.length; i++){
        let diff = target- nums[i];
        if(table[diff] != undefined){
            return [table[diff], i];
        }else{
            table[nums[i]] = i;
        }
    }
    
    //{number, index}
    // 2 -9 = -7 -> |7| -> {2:0}
    // 7 -9 = -2 -> |2| -> table[2] exists -> return the key of 2 and curr index.
};

