/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answer = []
    nums.sort((a,b) => a-b);
    for(let i=0; i<nums.length-2; i++){
        if(i ===0 || nums[i] > nums[i-1]){        
            let start = i+1;
            let end = nums.length-1;

            while(start < end){
                let sum = nums[i] + nums[start] + nums[end];
                if(sum === 0) answer.push([nums[i], nums[start], nums[end]]);
                if(sum < 0){
                    let currStart = start;
                    while(nums[currStart] === nums[start] && start<end){
                        start ++;    
                    }
                }
                else{
                    let currEnd = end;
                    while(nums[currEnd] === nums[end] && start<end){
                        end --;    
                    }
                }
            }
        }
    }
    return answer;
};