/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]


Example 2:
Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    const result = [];
    helper(result, '', 0, 0, n);
    return result;
};

const helper = (result, current, open, close, n)=>{
    if(current.length === n*2){
        result.push(current);
        return;
    }
    if(open < n){
        helper(result, current+'(', open+1, close, n);
    }
    if(close< open){
        helper(result, current+')', open, close+1,n);
    }
    
}