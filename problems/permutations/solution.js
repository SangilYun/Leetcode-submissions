/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    helper(result, nums, []);
    return result;
};

const helper = (result, nums, curr) =>{
    if(nums.length ===curr.length){
        result.push(curr.slice());
        return;
    }
    
    
    for(let i=0; i<nums.length; i++){
        let num = nums[i]
        if(curr.indexOf(num) === -1){
            curr.push(num);    
            helper(result, nums, curr);
            curr.pop();
        }
    }
}