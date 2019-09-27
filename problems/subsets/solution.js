/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    helper(nums, nums.length-1);
    return answer;
};

function helper(nums, index){
    let answers;
    if(index === -1){
        answer=[[]];
    }else{
        let answers = helper(nums, index-1);
        let currChar = nums[index];
        let moreSubSets = [];
        for(let subset of answer){
            
            let newSubSet = [];
            newSubSet.push(...subset);
            newSubSet.push(currChar);
            moreSubSets.push(newSubSet);
        }
        answer.push(...moreSubSets);
    }
    return answer;
}