/*
Given an array of scores that are non-negative integers. Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on. Each time a player picks a number, that number will not be available for the next player. This continues until all the scores have been chosen. The player with the maximum score wins.

Given an array of scores, predict whether player 1 is the winner. You can assume each player plays to maximize his score.

Example 1
Input: [1, 5, 233, 7]
Output: True
Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.

Example 2
Input: [1, 5, 233, 7]
Output: True
Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const dp = new Array(nums.length).fill(0).map(()=>new Array(nums.length).fill(0));
    const result = helper(nums, 0, nums.length-1, dp);
    return result>=0
    
};

const helper = (nums, start, end, dp) =>{
    if(start === end){
        return nums[start];
    }
    if(dp[start][end]){        
        return dp[start][end];
    }
    const left=nums[start]-helper(nums, start+1, end, dp);
    const right=nums[end]-helper(nums, start, end-1, dp);
    dp[start][end] = Math.max(left, right);

    return dp[start][end]
}

/*
Runtime: O(N2) where N is the total number of elements in nums.
Space complexity: O(N2) where N is the total number of elements in nums. This results from our 2D matrix (which is size N x N).
*/