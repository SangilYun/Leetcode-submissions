/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0){
        return 0;
    }else if(nums.length===1){
        return nums[0];
    }else if(nums.length===2){
        return Math.max(nums[0], nums[1]);
    }else{
        let dp = Array(nums.length);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        for(let i=2; i<dp.length; i++){
            dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
        }
        return dp[nums.length-1]
    }
};

//[1, 2, 5, 2, 9, 99, 77]

//2+2+99 = 103
//1+5+9+77 = 92
//1+5+99 = 105